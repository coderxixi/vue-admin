import { App } from "vue";
import {createRouter,createWebHashHistory} from "vue-router";
import routers  from "./routes";
import layoutRoutes from "./autoload";
import guard from "./guard"
const router=createRouter({
  history:createWebHashHistory(),
  routes:[...routers,...layoutRoutes],
})

export default router

export function setupRouter(app:App){
  //路由拦截
  guard(router)
  app.use(router)
}