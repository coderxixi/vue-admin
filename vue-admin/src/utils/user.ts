import userApi from '@/api/userApi';
import useStorage from '@/composables/system/useStorage'
import {CacheKey} from "@/enum/CacheKey"
import router from '@/router';
import user from "@/store/user"

export function loginOut(){
  
  useStorage().remove(CacheKey.TOKEN_NAME)
  user().info=null
  router.push("/");
}

export  async function login(valuse){
  const {
    result: { token },
  } = await userApi.login(valuse);
  useStorage().set(CacheKey.TOKEN_NAME, {
    expire: 130000,
    token,
  });

  const routeName=useStorage().get(CacheKey.REDIRECT_ROUTE_NAME)??'home'
  router.push({ name: routeName });
}