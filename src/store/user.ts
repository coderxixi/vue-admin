import userApi, { User } from '@/api/userApi'
import { defineStore } from 'pinia'


export default defineStore('user', {
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    return {
      info: {} as null | User
    }
  },
  actions: {
    async getUserInfo() {
      let res = await userApi.info();
      this.info = res.data
    }
  }
})