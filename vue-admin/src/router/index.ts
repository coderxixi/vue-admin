import { App } from "vue";
import {createRouter,createWebHashHistory} from "vue-router";
const router=createRouter({
  history:createWebHashHistory(),
  routes:[
    {
      path:'/',
      component:()=>import("../view/home.vue")
    }
  ]
})

export default router

export function setupRouter(app:App){
  app.use(router)
}