import { App } from "vue";
import { setupTailwindcss } from "./tailwindcss";
import setupElementui from  "./elementui"
import _ from "lodash"
//自动注册全局组件
function autoRegisterComponent(app: App) {
  const components = import.meta.glob('../components/from/*.vue');
  Object.keys(components).forEach(key=>{
   const name =key.split('/').pop()?.split('.').shift() as string;
   console.log(name,_.camelCase(name));
   
   app.component(_.camelCase(name),components[key])
  })

}
export default function setupPlugins(app: App) {
  autoRegisterComponent(app)
  setupTailwindcss()
  setupElementui(app)
}
