import { RouteRecordRaw } from "vue-router";

export  const routers={
    name: 'editor', path: '/editor', component: () => import('@/layouts/editor.vue'),
    children:[
      {
        name: 'editor.markdown', path: '/editor/markdown', component: () => import('@/view/editor/markdown.vue'),
       },
       {
        name: 'editor.base', path: '/editor/base', component: () => import('@/view/editor/base.vue'),
       }
  ]
  } as RouteRecordRaw