import { store } from "@/utils";
import { RouteLocationNormalized, Router } from "vue-router"



class Guard {
  constructor(protected router: Router) {

  }
  public run() {
    //路由拦截
    this.router.beforeEach((to, from) => {
      let token=store.get('token') as string|null
      // 登录处理
      if(this.isLogin(to,token)==false){
      //  return {name:'login'}
      } 
      console.log('路由', to);
      //权限处理
    })
  }
  //路由检测
  private isLogin(route:RouteLocationNormalized,token:string|null){
   return Boolean(!route.meta.auth || (route.meta.auth && token))
  }
}

export default (router: Router) => {
  new Guard(router).run()
}