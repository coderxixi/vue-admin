<template>
  <div class="flex justify-between items-center pr-4 pl-4 h-[48px] bg-white">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">编辑器</el-breadcrumb-item>
      <el-breadcrumb-item>富文本编辑器</el-breadcrumb-item>
      <!-- <el-breadcrumb-item>promotion detail</el-breadcrumb-item> -->
    </el-breadcrumb>

    <div class="flex items-center justify-center relative group">
      <i
        class="fas cursor-pointer fa-expand hidden md:flex mr-3 text-gray-600"
      />
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
</template>

<script setup lang="ts">
import {loginOut} from "@/utils/index"
import {user} from "@/store/user"
const userStore =user();
//退出登录
const loginout=()=>{
  loginOut()
}
</script>

<style scoped lang="scss">

</style>