import { ConfigEnv, Plugin} from 'vite'
import vue from '@vitejs/plugin-vue'
import {setupMockPlugin} from "./mock"
export function setupPlugin(isBuild:Boolean,env:ViteEnv){
  const plugins:Plugin[]=[vue()]
  plugins.push(setupMockPlugin(isBuild))
  return plugins
}