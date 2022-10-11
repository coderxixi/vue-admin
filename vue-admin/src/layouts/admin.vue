<template>
  <div class="admin h-min-screen w-screen flex">
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
    <div class="content flex-1 bg-gray-100">
      <!-- 导航栏 -->
      <NavBar />
      <!-- 历史菜单 -->
      <historyLink  class="hidden md:block"/>
      <!-- 路由页面 -->
      <div class="m-5">
        <router-view />
      </div>
     
    </div>
  </div>
</template>

<script setup lang="ts">
import meun from "./components/meun.vue";
import NavBar from "./components/navBar.vue";
import historyLink from "./components/historyLink.vue";
components: {
  meun;
  NavBar;
  historyLink;
}
</script>
<script lang="ts">
export default {
  route: {
    meta: {
      auth: true,
    },
  },
};
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
</style>