import { store } from "@/utils";
import { RouteLocationNormalized, Router } from "vue-router"

import{user} from "@/store/user"
import { resolve } from "path";

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
  private async beforEach(to:RouteLocationNormalized, from:RouteLocationNormalized){
    // 登录处理
    if (this.isLogin(to) == false) return { name: 'auth.login' }
    if (this.isGuest(to) == false) return { name: 'home' }
    await this.getuserInfo()
   
    //权限处理
  }
  //token 
  private token():string|null{
    console.log("store.get('token')?.token",store.get('token')?.token);
    
    return store.get('token')?.token
  }
  //获取用户
  private getuserInfo(){
   
    if(this.token()){
    return  user().getUserInfo();
    }
  }
}

export default (router: Router) => {
  new Guard(router).run()
}