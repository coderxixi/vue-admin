<template>
  <div class="admin  md:grid  md:grid-cols-[auto_1fr] h-screen w-screen">
    <!-- 菜单 -->
    <meun />
    <div class="content bg-gray-100 grid grid-rows-[auto_1fr]">
      <div>
        <!-- 导航栏 -->
        <NavBar />
        <!-- 历史菜单 -->
        <historyLink class="hidden md:block" />
      </div>

      <!-- 路由页面 -->
      <div class="p-3 relative overflow-y-auto">
        <router-view #default="{ Component }">
          <!-- 页面添加过渡动画 -->
          <Transition
            appear
            class="animate__animated"
            enter-active-class="animate__bounceInRight"
            leave-active-class="animate__fadeOutRightBig "
          >
            <component :is="Component" class="absolute w-full" />
          </Transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import meun from "./components/meun.vue";
import NavBar from "./components/navBar.vue";
import historyLink from "./components/historyLink.vue";
import menuStore from "@/store/menuStore";
import menuService from "@/composables/menu";
import {  watch} from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
const route = useRoute();
const menu = menuStore();
// menu.init();
watch(route,()=>{
  menuService.addHistoryMenu(route)
},{immediate:true })
</script>

<style scoped lang="scss">
.admin {
}
.animate__bounceInRight {
  animation-duration: 0.5s;
}
.animate__fadeOutRightBig {
  animation-duration: 0.3 s;
}


</style>