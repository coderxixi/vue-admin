import { store } from "@/utils";
import { RouteLocationNormalized, Router } from "vue-router"



class Guard {
  constructor(protected router: Router) {

  }
  public run() {
    //路由拦截
    this.router.beforeEach(this.beforEach.bind(this))
  }
  //路由检测
  private isLogin(route: RouteLocationNormalized) {
    return Boolean(!route.meta.auth || (route.meta.auth && !this.token()))
  }
  //游客处理
  private isGuest(route: RouteLocationNormalized) {
    return Boolean(!route.meta.guest || (route.meta.guest && this.token()))
  }
  private beforEach(to:RouteLocationNormalized, from:RouteLocationNormalized){
    
    // 登录处理
    console.log("this.isLogin(to)",this.isLogin(to),this.isGuest(to),to);
    
    if (this.isLogin(to) == false) return { name: 'auth.login' }
    if (this.isGuest(to) == false) return { name: 'home' }
    //权限处理
  }
  //token 
  private token():string|null{
    
    return store.get('token')?.token.token
  }
}

export default (router: Router) => {
  new Guard(router).run()
}