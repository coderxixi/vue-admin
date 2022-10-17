<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <template v-if="menuService.route.value?.matched.length">
      <el-breadcrumb-item :to="{ path: r.name }" v-for="(r,index) of menuService.route.value?.matched" :key="index">{{r.meta?.menu?.title}}</el-breadcrumb-item>
      <!-- <el-breadcrumb-item>富文本编辑器</el-breadcrumb-item> -->
    </template>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import menuService from "@/composables/menu";
</script>

<style scoped>
</style>