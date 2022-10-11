<template>
  <div class="flex gap-3 justify-between">
    <el-card shadow="always" :body-style="{padding:'20px'}" v-for="n of 4">
      <template #header>
        <div>
          <span></span>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script setup lang="ts">

</script>
<script lang="ts">
export default {
  route :{
    name:'home',
    meta:{

    }
  }
}
</script>
<style scoped>

</style>