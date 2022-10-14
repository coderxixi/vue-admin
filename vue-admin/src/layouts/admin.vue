<template>
  <div class="admin grid grid-cols-[auto_1fr] h-screen w-screen">
    <div class="menu w-[200px] bg-gray-800 p-4 hidden md:block">
      <div class="logo text-gray-300 flex items-center justify-center">
        <img
          class="text-fuchsia-400 mr-2 w-12 rounded-3xl"
          src="../assets/img/avar.jpeg"
        />
        <!-- <i class="fab fa-adn text-fuchsia-400 mr-2 text-[35px]"></i> -->
        后台模版
      </div>
      <!-- 菜单 -->
      <div class="left-container">
        <meun />
      </div>
    </div>
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
            <component :is="Component" class="absolute w-full"/>
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
import { onBeforeRouteUpdate, useRoute } from "vue-router";
const route = useRoute();
const menu = menuStore();
menu.init();
onBeforeRouteUpdate(() => {
  menu.addHistoryMenu(route);
});
</script>

<style scoped lang="scss">
.admin-menu {
  @apply z-10 bg-gray-800 h-full absolute md:relative overflow-auto;
  .menu {
    @apply z-30 w-[200px];
    .logo {
      @apply text-gray-300 flex items-center p-4;
    }
  }
}
.animate__bounceInRight{
 animation-duration: 0.5s;
}
.animate__fadeOutRightBig{
  animation-duration: 0.3 s;
}
</style>