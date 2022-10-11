import { RouteRecordRaw } from "vue-router";
export default  function moduleRegister(){
  const routers=[] as RouteRecordRaw[]
  const modlues= import.meta.glob('../module/**/*.ts',{ eager: true });
  Object.keys(modlues).forEach((key)=>{
   routers.push(modlues[key].routers)
  })
//通过权限过滤路由
  return routers
}