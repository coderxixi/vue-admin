<template>
  <div class="flex justify-between items-center pr-4 pl-4 h-[48px] bg-white">
    <div class="flex items-center">
      <MenuUnfoldOne theme="filled" size="24" fill="#10ad57" class="cursor-pointer duration-300" v-if="show" />
      <MenuFoldOne theme="filled" size="24" fill="#10ad57" class="cursor-pointer duration-300" v-else />
      <div class="ml-8 "><span class=" from-stone-800 text-[18px]">首页</span> / <span class=" from-stone-800 text-[18px]">错误页面</span> / 404</div>
    </div>
    <div class="flex items-center">
      <i class="fas cursor-pointer fa-expand hidden md:flex mr-3 text-gray-600" />
      <img class="w-[30px] rounded-3xl" src="../../assets/img/avar.jpeg"/>
      <span class=" ml-3">嘻嘻</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MenuFoldOne, MenuUnfoldOne } from '@icon-park/vue-next'
import { ref } from 'vue';
let show=ref(true)
</script>

<style scoped>

</style>