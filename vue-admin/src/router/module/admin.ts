import { RouteRecordRaw } from "vue-router";

export const routers={
    name: 'admin',
    path: '/admin',
    redirect:'/admin/home',
    // meta:{
    //      auth:true,
    // },
    component: () => import('@/layouts/admin.vue'),
    children:[
      {
        name: 'admin.home',
        path: '/admin/home', 
        meta:{
          menu:{

          }
        },
        component: () => import('@/view/admin/home.vue'),
    }
  ]
  } 