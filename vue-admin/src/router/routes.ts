import { RouteRecordRaw } from "vue-router"

const routers = [
  {
    path: '/',
    name:"home",
    component: () => import("@/view/home.vue"),
  },
  {
    path: '/login',
    name:"auth.login",
    component: () => import("@/view/auth/login.vue"),
  }
] as RouteRecordRaw[]

export default routers