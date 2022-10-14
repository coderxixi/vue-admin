import { RouteRecordRaw } from "vue-router";

export const routers={
    name: 'admin',
    path: '/admin',
    redirect:'/admin/home',
    meta:{
         menu:{
          title:'首页',
          icon:'fab fa-bilibili'
         }
    },
    component: () => import('@/layouts/admin.vue'),
    children:[
      {
        name: 'admin.home',
        path: '/admin/home', 
        meta:{
          menu:{
            title:'数据面板'
          }
        },
        component: () => import('@/view/admin/home.vue'),
    }
  ]
  } 