import { App } from "vue";
import { setupTailwindcss } from "./tailwindcss";
export default function setupPlugins(app:App){
  setupTailwindcss()
}