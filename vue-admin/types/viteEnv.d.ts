
interface ViteEnv {
  VITE_SOME_KEY: number
  VITE_ROUTER_AUTOLOAD: boolean
  VITE_API_URL: string
}
interface ImportMetaEnv extends ViteEnv{}

interface ImportMeta {
  readonly env: ImportMetaEnv
}





