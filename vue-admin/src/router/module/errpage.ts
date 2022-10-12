import { RouteRecordRaw } from "vue-router";

export const routers = {
  name: 'errpage',
  path: '/errpage',
  component: () => import('@/layouts/admin.vue'),
  meta: {
    title: '错误页面',
    icon: 'fab fa-airbnb',
    show: true,
    auth:true
  },

  children: [
    {
      name: 'errpage.404',
      path: '/errpage/404',
      meta: {
        title: '404页面',
        icon: 'fab fa-airbnb',
        show: true,
        isClick:true,
        auth:true
      },
      component: () => import('@/view/errpage/404.vue'),
    },
    {
      name: 'errpage.403',
      path: '/errpage/403',
      meta: {
        title: '403页面',
        icon: 'fab fa-airbnb',
        show: true,
        isClick:false,
      },
      component: () => import('@/view/errpage/403.vue'),
    },
    {
      name: 'errpage.402',
      path: '/errpage/402',
      meta: {
        title: '402页面',
        icon: 'fab fa-airbnb',
        show: false,
        isClick:false,
        
      },
      component: () => import('@/view/errpage/402.vue'),
    }
  ]
} as RouteRecordRaw