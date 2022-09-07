import { defineConfig, ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from "./vite/alias"
import parseEnv from "./vite/util"

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
  const env=loadEnv(mode,root);
  parseEnv(env)
  // const env=loadEnv()
  return {
    resolve: {
      alias,
    },
    plugins: [vue()],
    server: {
      open: true
    }
  }
}
