import _ from "lodash"

export default function parseEnv(env:Record<string,any>):ViteEnv{
 console.log(env);
 const envs:any=_.cloneDeep(env)
  Object.entries(env).forEach(([key,value])=>{
  
    if(value=="true" || value=="false"){
      envs[key]=value=="true" ?true:false
    }
    if(/^\d+$/.test(value)){
      envs[key]=parseInt(value)
    }
   
  })
  console.log(envs);
  
  return envs
}

