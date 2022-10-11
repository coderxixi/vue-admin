

<template>
  <div class="m-3 grid grid-flow-col gap-3 justify-start">
    <a
      class="text-sm text-gray-600 bg-white rounded-md py-2 px-3"
      href="#"
      v-for="(n, index) of links"
      :key="index"
    >
      {{ n.title }}
      <i class="fas fa-times ml-1"></i>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const links = ref<{ title: string }[]>([
  {
    title: "404错误",
  },
  {
    title: "富文本编辑器",
  },
  {
    title: "用户管理",
  },
  {
    title: "404错误",
  },
  {
    title: "富文本编辑器",
  },
  {
    title: "用户管理",
  },
]);
</script>

<style scoped>
</style>