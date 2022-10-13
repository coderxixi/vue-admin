import { IMenu } from "#/menu";
import { CacheKey } from "@/enum/CacheKey";
import router from "@/router";
import { ref } from "vue";
import useStorage from '@/composables/system/useStorage'
const storage= useStorage()
class Menu {
  //菜单
  public menus=ref<IMenu[]>([])
  //历史菜单
  public historMenus=ref<IMenu[]>([])
  constructor(){
    this.menus.value=this.getMenuByRoute();
    this.historMenus.value=storage.get(CacheKey.HISTORY_MENU)??[]
  }
  getMenuByRoute() {
    return  router
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

export default new Menu()