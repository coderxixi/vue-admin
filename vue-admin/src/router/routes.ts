import { RouteRecordRaw } from "vue-router"

const routers = [
  {
    path: '/',
    name:"home",
    component: () => import("@/view/home.vue"),
  },
  
] as RouteRecordRaw[]

export default routers