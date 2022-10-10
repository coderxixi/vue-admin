<template>
  <div class="admin h-screen w-screen flex">
    <div class="menu w-[200px] bg-gray-800 p-4">
      <div class="logo text-gray-300 flex items-center justify-center">
        <img class="text-fuchsia-400 mr-2 w-12 rounded-3xl " src="../assets/img/avar.jpeg"/>
        <!-- <i class="fab fa-adn text-fuchsia-400 mr-2 text-[35px]"></i> -->
        后台模版
      </div>
      <!-- 菜单 -->
      <div class="left-container">
        <Menu/>
      </div>
    </div>
    <div class="content flex-1 bg-gray-200">
      <!-- 导航栏 -->
      <router-view />
      <!-- 历史菜单 -->
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from "./components/meun.vue"
components:{
  Menu
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