import { IMenu } from './menu'
import 'vue-router'
declare module 'vue-router'{
  interface RouteMeta {
    auth?:boolean,
    guest?:boolean,
    menu?:IMenu
    //访问权限
    permissions?:string
  }
}
