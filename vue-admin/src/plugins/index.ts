import { App } from "vue";
import { setupTailwindcss } from "./tailwindcss";
export default function setupPlugins(app: App) {
  setupTailwindcss()
  autoRegisterComponent(app)
}
//自动注册全局组件
function autoRegisterComponent(app: App) {
  const components = import.meta.glob('../components/from/*.vue');
  Object.keys(components).forEach(key=>{
   const name =key.split('/').pop()?.split('.').shift() as string
    app.component(name,components[key])
  })

}