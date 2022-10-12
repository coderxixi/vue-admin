import { Random } from "mockjs";
import { MockMethod } from "vite-plugin-mock";
export default [
  {
    url:'/api/info',
    method: "get",
    response:()=>{
      return {
        code:200,
        message:'请求成功',
        type:'success',
        data:{
          name:"刘圣书",
          age:18,
          avatar:''
        }
      }
    }
  },
  {
    url:'/api/login',
    method: "post",
    response:()=>{
      return {
        code:200,
        message:'登录成功',
        type:'success',
        result:{
          token:Random.string(10)
        }
      }
    }
  }
] as MockMethod[]