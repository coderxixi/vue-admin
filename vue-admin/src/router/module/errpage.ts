import { RouteRecordRaw } from "vue-router";

export const routers = {
  name: 'errpage',
  path: '/errpage',
  component: () => import('@/layouts/error.vue'),
  meta: {
    title: '错误页面',
    icon: 'fab fa-airbnb',
    show: true
  },

  children: [
    {
      name: 'errpage.404',
      path: '/errpage/404',
      meta: {
        title: '404页面',
        icon: 'fab fa-airbnb',
        show: true
      },
      component: () => import('@/view/errpage/404.vue'),
    },
    {
      name: 'errpage.403',
      path: '/errpage/403',
      meta: {
        title: '403页面',
        icon: 'fab fa-airbnb',
        show: true
      },
      component: () => import('@/view/errpage/403.vue'),
    }
  ]
} as RouteRecordRaw