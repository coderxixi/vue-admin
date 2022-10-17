

<template>
  <div class=" p-3 grid grid-flow-col gap-3 justify-start" v-show="menuService.historMenus.value.length">
    <div class="grid grid-flow-col gap-3 justify-start">
      <div  class="text-sm  hover:bg-violet-600 hover:text-white duration-150 bg-white border rounded-sm shadow-sm py-2 px-3 m-1"
      href="#"
      v-for="(n, index) of menuService.historMenus.value"
      :key="index"
      :class="{'bg-violet-600 text-white':n.route==$route.name}"
      >
     
      <router-link
      :to="{name:n.route}"
    >
      {{ n.title }}
      <i class="fas fa-times ml-1" @click="removeMenu(n)"></i>
    </router-link>
    </div>
    </div>
   
   
  </div>
</template>

<script setup lang="ts">
import { IMenu } from "#/menu";
import menuService from "@/composables/menu"
import menuStore from "@/store/menuStore";
// import { ref } from "vue";
//  const links= menuStore();


const removeMenu=(menu:IMenu)=>{
  menuService.removeHistoryMenu(menu)
}
</script>

<style scoped>
</style>