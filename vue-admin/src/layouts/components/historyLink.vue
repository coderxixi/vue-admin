

<template>
  <div class="m-5 grid grid-flow-col gap-3 justify-start">
    <router-link
     :to="{name:n.route}"
      class="text-sm text-gray-600 hover:bg-violet-600  duration-150 bg-white border rounded-sm shadow-sm py-2 px-3 m-1"
      href="#"
      v-for="(n, index) of links.historyMenu"
      :key="index"
    >
      {{ n.title }}
      <i class="fas fa-times ml-1"></i>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import menuStore from "@/store/menuStore";
import { ref } from "vue";
 const links= menuStore();
 console.log('link',links);
 
// const links = ref<{ title: string }[]>([
//   {
//     title: "404错误",
//   },
//   {
//     title: "富文本编辑器",
//   },
//   {
//     title: "用户管理",
//   },
//   {
//     title: "404错误",
//   },
//   {
//     title: "富文本编辑器",
//   },
//   {
//     title: "用户管理",
//   },
// ]);
</script>

<style scoped>
</style>