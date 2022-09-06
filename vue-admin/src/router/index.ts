import { App } from "vue";
import {createRouter,createWebHashHistory} from "vue-router";
import routers  from "./routes";
import layoutRoutes from "./autoload";
const router=createRouter({
  history:createWebHashHistory(),
  routes:[...routers,...layoutRoutes],
})

export default router

export function setupRouter(app:App){
  app.use(router)
}