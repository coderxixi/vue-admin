<template>
  <div class="flex justify-between items-center pr-4 pl-4 h-[48px] bg-white">
    <div class="flex items-center ">
      <div @click="menuService.toggleMenu">
        <i class="fas fa-square-caret-left mr-3 cursor-pointer"  v-if="menuService.close.value"></i>
        <i class="fas fa-square-caret-right mr-3 cursor-pointer" v-else></i>
      </div>
     <!-- 面包屑组件 -->
   <breadcrumb/>
    </div>
   

    <div class="flex items-center justify-center relative ">
      <div class="flex items-center">
        <notification class="mr-2"/>
        <i
        @click="fullScreen"
        class="fas cursor-pointer fa-expand hidden md:flex mr-8 text-gray-600"
      />
      </div>
     <div class="flex items-center group">
      <img class="w-[30px] rounded-3xl" src="../../assets/img/avar.jpeg" />
      <span class="ml-3 text-sm text-gray-600">{{userStore.info?.name}}</span>
      <!-- 弹出菜单 -->
      <section
        class="
          border
          rounded-md
          absolute
          top-full
          bg-white
          shadow-sm
          px-3
          whitespace-nowrap
          hidden
          group-hover:block
        "
      >
        <div class="flex  items-center border-b py-3 cursor-pointer">
          <i class="fab fa-blogger"></i>
          <span class="text-sm text-gray-600 ml-2">网站首页</span>
        </div>
        <div class="flex  items-center  border-b  py-2  cursor-pointer">
          <i class="fab fa-blogger"></i>
          <span class="text-sm text-gray-600 ml-2">会员中心</span>
        </div>
        <div class="flex  items-center  py-2  cursor-pointer" @click="loginout">
          <i class="fab fa-sign-out-alt"></i>
          <span class="text-sm text-gray-600 ml-2">退出登录</span>
        </div>
      
      </section>
     </div>
     
    </div>
  </div>
</template>

<script setup lang="ts">
import {loginOut} from "@/utils/index"
import notification from "@/components/notification.vue";
import breadcrumb from "@/components/breadcrumb.vue"

import user from "@/store/user"
import menuService from "@/composables/menu";
const userStore =user();
//退出登录
const loginout=()=>{
  loginOut()
}
//全屏功能
const fullScreen=()=>{
  console.log("全屏功能" );
  document.documentElement.requestFullscreen( )
}
</script>


<style scoped lang="scss">

</style>