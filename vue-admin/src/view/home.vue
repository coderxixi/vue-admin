<template>
  <div class=" h-screen w-screen bg-gray-700 flex flex-col justify-center items-center">
 <img src="../assets/img/icon.png" class="w-40 h-40 object-cover rounded-full bottom-8 border-white mb-5" alt="">
    <div >
      <router-link :to="{name:'admin.home'}" class="hd-button">后台管理</router-link>
    <router-link :to="{name:'auth.login'}" class="hd-button ml-3 !bg-fuchsia-700">用户登录</router-link>
    </div>
   
      
  </div>
</template>

<script setup lang="ts">

</script>
<script lang="ts">
export default {
  route:{
    name:'home'
  }
}
</script>
<style scoped>

</style>