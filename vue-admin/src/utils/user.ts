import userApi from '@/api/userApi';
import useStorage from '@/composables/system/useStorage'
import {CacheKey} from "@/enum/CacheKey"
import router from '@/router';
import store from './store';
import {user} from "@/store/user"

export function loginOut(){
  useStorage().remove(CacheKey.TOKEN_NAME)
  user().info={}
  router.push("/");
}

export  async function login(valuse){
  const {
    result: { token },
  } = await userApi.login(valuse);
  store.set("token", {
    expire: 130000,
    token,
  });
  router.push({ name: "home" });
}