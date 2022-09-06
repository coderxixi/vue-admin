import { App } from "vue";
import {createRouter,createWebHashHistory} from "vue-router";
import routers  from "./routes";
const router=createRouter({
  history:createWebHashHistory(),
  routes:routers
})

export default router

export function setupRouter(app:App){
  app.use(router)
}