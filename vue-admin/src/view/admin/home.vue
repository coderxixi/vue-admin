<template>
  <div class="grid grid-flow-col gap-3">
    <el-card shadow="hover" :body-style="{ padding: '20px' }" v-for="n of 4">
      <template #header>
        <div class="flex justify-between items-center">
          用户数
          <el-tag type="danger" size="mini" effect="dark">月</el-tag>
        </div>
      </template>
      <section class="flex justify-between items-center">
        <span class="text-2xl"> $2998989</span>
        <i class="fab fa-algolia text-violet-500 text-4xl"></i>
      </section>
      <section class="text-xs flex justify-between mt-5">
        总人数 <span> 200人</span>
      </section>
    </el-card>
  </div>
</template>

<script setup lang="ts">
</script>
<script lang="ts">
export default {
  route: {
    name: "home",
    meta: {},
  },
};
</script>
<style scoped>
</style>