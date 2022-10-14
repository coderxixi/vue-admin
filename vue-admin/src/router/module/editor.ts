import { RouteRecordRaw } from "vue-router";

export  const routers={
    name: 'editor',
     path: '/editor',
     meta: {
      menu:{
        title: '编辑器',
        icon: 'fab fa-algolia',
      }
    
    },
     component: () => import('@/layouts/admin.vue'),
      children:[
      {
        name: 'editor.markdown',
        path: '/editor/markdown',
        meta: {
          menu:{
            title: 'markdown编辑',
            icon: 'fab fa-airbnb',
          }
        
        },
        component: () => import('@/view/editor/markdown.vue'),
       },
       {
        name: 'editor.base',
         path: '/editor/base',
         meta: {
          menu:{
            title: '富文本编辑',
            icon: 'fab fa-angrycreative',
          }
        
        },
          component: () => import('@/view/editor/base.vue'),
       }
  ]
  } as RouteRecordRaw