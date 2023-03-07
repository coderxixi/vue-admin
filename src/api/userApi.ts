import {http} from "@/plugins/axios";
export interface User{
    name:string,
    age:number,
    avatar:string,
    permissions:string[]
}
function info(){
  // return http.request<User>({
  //   url:'info'
  // })

  return {
    code:200,
    message:'请求成功',
    type:'success',
    data:{
      name:"刘圣书",
      age:18,
      avatar:'',
      permissions:['editor_markdowm','abc']
    }
  }
}

interface LoginInterface {
  token:string
}

function login(data:any){
  // return http.request<LoginInterface>({
  //   url:'login',
  //   method:'post',
  //   data
  // })

  return {
    code:200,
    message:'登录成功',
    type:'success',
    result:{
      token:Math.random()
    }
  }
}

export default {
  info,login
}