import _ from "lodash";

export default class {
  public env = {} as ImportMetaEnv;
  constructor() {
    this.env = this.getEnvs()
  }
  private getEnvs(): ImportMetaEnv {
    const envs: any = {}
    Object.entries(import.meta.env as Record<string, any>).forEach(([key, value]) => {

      if (value == "true" || value == "false") {
        envs[key] = value == "true" ? true : false
      }
      else if (/^\d+$/.test(value)) {
        envs[key] = Number(value)
      }
      else if (value == "null") {
        envs[key] = null
      }
      else if (value == "undefind") envs[key] = undefined
      else {
        envs[key] = value
      }
    })
    console.log(envs);

    return envs
  }
}