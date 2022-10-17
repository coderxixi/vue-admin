import { App } from "vue";
import {createRouter,createWebHashHistory} from "vue-router";
import routers  from "./routes";
import autolaod from "./autolaod/index";
import guard from "./guard"
import userInfo from "@/store/user"
import { useRestoreActive } from "element-plus";


const router=createRouter({
  history:createWebHashHistory(),
  routes:[...routers],//,...layoutRoutes
})

export default router

export  async function setupRouter(app:App){
  const user=await userInfo()
  await user.getUserInfo();
  //路由拦截
  autolaod(router);
  guard(router)
  app.use(router)
}