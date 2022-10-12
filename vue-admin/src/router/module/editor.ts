import { RouteRecordRaw } from "vue-router";

export  const routers={
    name: 'editor',
     path: '/editor',
     meta: {
      title: '编辑页面',
      icon: 'fab fa-algolia',
      show: true,
      auth:true
    },
      component: () => import('@/layouts/admin.vue'),
    children:[
      {
        name: 'editor.markdown',
        path: '/editor/markdown',
        meta: {
          title: 'markdown编辑',
          icon: 'fab fa-airbnb',
          show: true,
          auth:true
        },
        component: () => import('@/view/editor/markdown.vue'),
       },
       {
        name: 'editor.base', path: '/editor/base', component: () => import('@/view/editor/base.vue'),
       }
  ]
  } as RouteRecordRaw