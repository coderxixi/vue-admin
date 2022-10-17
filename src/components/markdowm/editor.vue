<template>
  <div>
  <div id="editor"></div>
  </div>
</template>

<script setup lang="ts">
import { nextTick } from "vue"
import ToastEditor from "./toastEditor"
nextTick(()=>{
  new ToastEditor('#editor','500px','sdfsdfs')
})
</script>

<style scoped lang="scss">
#editor{
  @apply bg-white
}

</style>