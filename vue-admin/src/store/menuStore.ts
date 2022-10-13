import { defineStore } from 'pinia'
import { RouteLocationNormalized, useRouter } from 'vue-router'
import router from '@/router'
import { IMenu } from "#/menu"
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
      console.log('ququeoiuwqor', this.getMenuByRoute(), router.getRoutes());

      this.getMenuByRoute()
    },
    //添加历史路由数据
    addHistoryMenu(route: RouteLocationNormalized) {
      const menu: IMenu = {
        ...route.meta.menu,
        route: route.name as string
      }
      const isHas = this.historyMenu.some(menu => menu.route == route.name);
      if (!isHas) {
        this.historyMenu.unshift(menu)
      }

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

    }
  }

})


