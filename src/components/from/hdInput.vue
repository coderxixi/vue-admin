<template>
  <div>
    <input 
    type="text"
     placeholder="请输入手机号" class="h-input"
     />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.h-input {
  @apply border rounded-sm 
  outline-none w-full
   py-1 px-4 border-gray-200 
   placeholder:text-sm focus:ring-2 ring-offset-2 ring-violet-600 duration-300 focus:border-white mt-5;
}
</style>