import { store } from "@/utils";
import { RouteLocationNormalized, Router } from "vue-router"



class Guard {
  constructor(protected router: Router) {

  }
  public run() {
    //路由拦截
    this.router.beforeEach((to, from) => {
      let token = store.get('token')?.token
      // 登录处理
      if (this.isLogin(to, token) == false) return { name: 'login' }
      if (this.isGuest(to, token) == false) return { name: 'home' }
      //权限处理
    })
  }
  //路由检测
  private isLogin(route: RouteLocationNormalized, token: any) {
    return Boolean(!route.meta.auth || (route.meta.auth && !token))
  }
  //游客处理
  private isGuest(route: RouteLocationNormalized, token: any) {
    return Boolean(!route.meta.guest || (route.meta.guest && token))
  }
}

export default (router: Router) => {
  new Guard(router).run()
}