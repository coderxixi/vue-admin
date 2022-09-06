import { RouteRecordRaw } from "vue-router";

const layouts = import.meta.glob("../layouts/*.vue");
const view =import.meta.glob("../view/**/*.vue");


function getRoutes(){
  const layoutRoutes = [] as RouteRecordRaw[];
  Object.entries(layouts).forEach(([file, module]) => {
    const route = getRouteByModule(file, module);
    route.children=getChildrenRoutes(route)
    layoutRoutes.push(route)
  })
  console.log("asdfasdf",layoutRoutes);
  
  return layoutRoutes
}

function getChildrenRoutes(layoutRoute:RouteRecordRaw){
  const routers=[] as RouteRecordRaw[]
     Object.entries(view).forEach(([file,module])=>{
      if(file.includes(`../view/${layoutRoute.name as string}`)){
        const route=getRouteByModule(file,module)
        routers.push(route)
      }
     })

     return routers
}

function getRouteByModule(file: string, module: { [key: string]: any }) {
  // console.log(file.match(/\.\.\/layouts\/(?<name>.+?)\.vue/i)?.groups?.name);
  const name = file.replace(/.+layouts\/|.+view\/|\.vue/gi, "")
  const route = {
    name:name.replace("/","."),
    path: `/${name}`,
    component: module

  } as RouteRecordRaw
  console.log(route);
  return route
}



console.log(getRoutes());


export default getRoutes()