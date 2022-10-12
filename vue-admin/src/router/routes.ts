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
    meta:{
      guest:false
    }
  },
  {
    path: '/:any(.*)',
    name:"notFound",
    component: () => import("@/view/errpage/404.vue"),
  },
] as RouteRecordRaw[]

export default routers