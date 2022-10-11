import { RouteRecordRaw } from "vue-router";

export  const routers={
    name: 'errpage', path: '/errpage', component: () => import('@/layouts/error.vue'),
    children:[
      {
        name: 'errpage.404', path: '/errpage/404', component: () => import('@/view/errpage/404.vue'),
      },
      {
        name: 'errpage.403', path: '/errpage/403', component: () => import('@/view/errpage/403.vue'),
      }
  ]
  } as RouteRecordRaw