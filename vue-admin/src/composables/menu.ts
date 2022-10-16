import { IMenu } from "#/menu";
import { CacheKey } from "@/enum/CacheKey";
import router from "@/router";
import { ref } from "vue";
import useStorage from '@/composables/system/useStorage'
import { RouteLocationNormalized } from "vue-router";

const storage= useStorage()
class Menu {
  //菜单
  public menus=ref<IMenu[]>([])
  //历史菜单
  public historMenus=ref<IMenu[]>([])
  //关闭
  public close=ref(true)
  // 路由
  public route=ref(null as null| RouteLocationNormalized)
  constructor(){
    this.menus.value=this.getMenuByRoute();
    this.historMenus.value=storage.get(CacheKey.HISTORY_MENU)??[]
    this.close.value=true
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
  setCurrentmenu(route:RouteLocationNormalized) {
   this.menus.value.forEach((c)=>{
      c.isClick=false
      c.children?.forEach(m=> {
        m.isClick=false
        if(m.route==route.name){
          c.isClick=true
          m.isClick=true
         
        }
      })
   })
  }
  toggleMenu(){
    console.log('toggleMenu',this.close.value);
    
    
    this.close.value=!this.close.value
  }
  //删除历史菜单
  removeHistoryMenu(route:RouteLocationNormalized){
    const index= this.historMenus.value.indexOf(route);
    this.historMenus.value.splice(index,1)
  }
  //添加历史路由菜单
  addHistoryMenu(route: RouteLocationNormalized) {
    if(!route.meta.menu) return
    this.route.value=route
    const menu: IMenu = {
      ...route.meta.menu,
      route: route.name as string
    }
    const isHas = this.historMenus.value.some(menu => menu.route == route.name);

    if (!isHas) {
      this.historMenus.value.unshift(menu)
    }
   storage.set(CacheKey.HISTORY_MENU,this.historMenus.value)
  }
}

export default new Menu()