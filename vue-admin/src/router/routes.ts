import { RouteRecordRaw } from "vue-router"

const routers = [
  {
    path: '/',
    component: () => import("../layouts/admin.vue"),
    children: [
      {
        path: 'admin',
        component: () => import("../view/home.vue")
      }

    ]
  },
  
] as RouteRecordRaw[]

export default routers