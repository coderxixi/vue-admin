import { Random } from "mockjs";
import { MockMethod } from "vite-plugin-mock";
export default [
  {
    url:'/api/get',
    method: "get",
    response:()=>{
      return {
        code:0,
        data:{
          name:"xixi"
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