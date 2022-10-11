
import { RouteRecordRaw } from "vue-router";
import getRoutes from "./view";
import moduleRegister from "./modlue"
import {env} from "@/utils"
let routes=[] as RouteRecordRaw[];
console.log("env.VITE_ROUTER_AUTOLOAD",env.VITE_ROUTER_AUTOLOAD,getRoutes());

if(env.VITE_ROUTER_AUTOLOAD){
  routes= getRoutes()
}else{
  routes=moduleRegister()
  
}

export default routes




