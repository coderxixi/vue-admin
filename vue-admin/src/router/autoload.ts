import { RouteRecordRaw } from "vue-router";

const layouts = import.meta.glob("../layouts/*.vue");
console.log("layouts", layouts);
Object.entries(layouts).forEach(([file, module]) => {
  const route = getRouteByModule(file, module)
})

function getRouteByModule(file: string, module: { [key: string]: any }) {
  // console.log(file.match(/\.\.\/layouts\/(?<name>.+?)\.vue/i)?.groups?.name);
  const name = file.replace(/.+layouts\/|\.vue/gi, "")
  const route = {
    name,
    path: `/${name}`,
    component: module

  } as RouteRecordRaw
  console.log(route);
  return route
}


const layoutRoutes = [] as RouteRecordRaw[];


export default layoutRoutes