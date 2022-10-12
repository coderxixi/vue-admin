import { defineStore } from 'pinia'
import { RouteLocationNormalized, useRouter } from 'vue-router'

export const router = defineStore('router', {
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    return {
      router: getRouters()
    }
  },

})

//获取权限路由信息
function getRouters() {
  const router = useRouter();
  const routers = router
  .getRoutes()
  .filter((route)=>{
    return route.children.length&&route.meta.show
  })
  .map((route)=>{
    route.children= route.children.filter((route)=>{
      return route.meta?.show
    })
    
    return route
  })
  return routers
}
