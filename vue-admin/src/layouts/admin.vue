

<script setup lang="ts">

  
</script>
<template>
  <div>
   <router-view/>
  </div>
</template>


<script lang="ts">
export default {
  route:{
    meta:{
      auth:true
    }
  }
}
</script>
<style scoped>

</style>