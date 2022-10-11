import { RouteRecordRaw } from "vue-router";

export  const routers={
    name: 'admin', path: '/admin', component: () => import('@/layouts/admin.vue'),
    children:[
      {
        name: 'admin.home', path: '/admin/home', component: () => import('@/view/admin/home.vue'),
    }
  ]
  } as RouteRecordRaw