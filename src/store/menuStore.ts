import { defineStore } from 'pinia'
import { RouteLocationNormalized, useRouter } from 'vue-router'
import router from '@/router'
import { IMenu } from "#/menu"
import useStorage from '@/composables/system/useStorage'
import { CacheKey } from '@/enum/CacheKey'
const storage = useStorage()
export default defineStore('router', {
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    return {
      router: [] as IMenu[],
      //历史菜单数据
      historyMenu: [] as IMenu[],
    }
  },
  actions: {
    init() {
      this.getMenuByRoute()
      this.historyMenu=storage.get(CacheKey.HISTORY_MENU)??[]
    },
    //添加历史路由数据
    addHistoryMenu(route: RouteLocationNormalized) {
      if(!route.meta.menu) return
      const menu: IMenu = {
        ...route.meta.menu,
        route: route.name as string
      }
      const isHas = this.historyMenu.some(menu => menu.route == route.name);
  
      if (!isHas) {
        this.historyMenu.unshift(menu)
      }
     storage.set(CacheKey.HISTORY_MENU,this.historyMenu)
    },
    getMenuByRoute() {
      this.router = router
        .getRoutes()
        .filter((route) => {
          return route.children.length && route.meta.menu
        })
        .map((route) => {
          let menu: IMenu = { ...route.meta?.menu };
          menu.children = route.children.filter((route) => {
            return route.meta?.menu
          })
            .map((route) => {
              return { ...route.meta?.menu, route: route.name }
            }) as IMenu[]

          return menu
        })
        .filter((route) => route.children?.length) as IMenu[]

    },
    //移除历史菜单
    removeHistoryMenu(menu: IMenu){
     const index= this.historyMenu.indexOf(menu);
     this.historyMenu.splice(index,1)
    }
  }

})


