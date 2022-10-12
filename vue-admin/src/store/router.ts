import { defineStore } from 'pinia'

export  const router= defineStore('router', {
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
        hd:'嘻嘻'
    }
  },
  getters:{
      get(state){
        return state.hd
      }
  }
})