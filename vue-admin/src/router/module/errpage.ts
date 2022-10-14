
import { RouteRecordRaw } from "vue-router";

export const routers = {
  name: 'errpage',
  path: '/errpage',
  
  meta: {
    menu:{
      icon:'fab fa-airbnb',
      title:'错误页面',
    }
   
  },
  component: () => import('@/layouts/admin.vue'),
  children: [
    {
      name: 'errpage.404',
      path: '/errpage/404',
      meta: {
        menu: {
          title: '404页面',
        }
      },
      component: () => import('@/view/errpage/404.vue'),
    },
    {
      name: 'errpage.403',
      path: '/errpage/403',
      meta: {
        menu: {
          title: '403页面',
        }
      },
      component: () => import('@/view/errpage/403.vue'),
    },
    {
      name: 'errpage.402',
      path: '/errpage/402',
      meta: {
        menu: {
          title: '402页面',
        }
      },
      component: () => import('@/view/errpage/402.vue'),
    }
  ]
} as RouteRecordRaw