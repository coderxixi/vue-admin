
import { Router, RouteRecordRaw } from "vue-router";
import getRoutes from "./view";
import moduleRegister from "./modlue"
import {env} from "@/utils"
let routes=[] as RouteRecordRaw[];

routes=env.VITE_ROUTER_AUTOLOAD? getRoutes():moduleRegister()
routes.pop()
//权限路由
function autolaod(route:Router){
  routes.forEach((r,index)=>{
      route.addRoute(r)
  })
}
export default autolaod




