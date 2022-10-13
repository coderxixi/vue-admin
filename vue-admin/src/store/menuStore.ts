import { defineStore } from 'pinia'
import {   useRouter } from 'vue-router'
import router from '@/router'
import {IMenu} from "#/menu"
export default defineStore('router', {
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    return {
      router: [] as IMenu[]
    }
  },
  actions:{
    init(){
      this.getMenuByRoute()
    },
    getMenuByRoute(){
      this.router = router
      .getRoutes()
      .filter((route)=>{
        return route.children.length&&route.meta.menu
       })
      .map((route)=>{
        let menu:IMenu={...route.meta?.menu};
           menu.children= route.children.filter((route)=>{
          return route.meta?.menu
        }).map((route)=>{
          return route.meta?.menu
        }) as IMenu[]
        
        return menu 
      })
      .filter((route)=>route.children?.length) as IMenu[]
     
    }
  }

})


