import { defineConfig, ConfigEnv, loadEnv } from 'vite'

import alias from "./vite/alias"
import parseEnv from "./vite/util"
import {setupPlugin} from "./vite/plugins"

// https://vitejs.dev/config/
// export default defineConfig({
//   resolve:{
//   alias,
//   },
//   plugins: [vue()],
//   server:{
//     open:true
//   }
// })
export default ({ command, mode }: ConfigEnv) => {
  const isBuild=command=="build";
  const root=process.cwd();
  const env=parseEnv(loadEnv(mode,root));
  
  return {

    // public:'./',
    base:'./',
    resolve: {
      alias,
    },
    plugins: setupPlugin(isBuild,env),
    server: {
      open: true
    }
  }
}
