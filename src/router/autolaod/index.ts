
import { Router, RouteRecordRaw } from "vue-router";
import getRoutes from "./view";
import moduleRegister from "./modlue"
import {env} from "@/utils"
import userInfo from "@/store/user"
let routes=[] as RouteRecordRaw[];

routes=env.VITE_ROUTER_AUTOLOAD? getRoutes():moduleRegister()
routes.pop()
//权限路由
function autolaod(route:Router){
  let user=userInfo();
  console.log('user',user.info);
  
  //过滤当前用户无效的路由
  routes= routes.map((r,index)=>{
    r.children=r.children?.filter((ru,index)=>{
       const permission=ru.meta?.permissions;
       return permission?user.info?.permissions.includes(permission):true
     })
     return r
  })
  //添加路由
  routes.forEach((router,index)=>{
    route.addRoute(router)
  })

}
export default autolaod




