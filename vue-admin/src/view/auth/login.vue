<template>
  <div class="bg-slate-300 h-screen flex justify-center items-center">
    <div
      class="
        w-[720px]
        bg-white
        grid-cols-2 grid
        -translate-y-16
        rounded-md
        shadow-sm
        overflow-hidden
      "
    >
      <div class="p-6">
        <h2 class="text-center text-gray-700 text-lg">会员登录</h2>
        <div >
          <input type="text" placeholder="请输入手机号" class="h-input"/>
          <input type="text" placeholder="请输入手机号" class="h-input"/>
        </div>
          <button class="hd-button">登录</button>
          <div class="flex space-x-4 justify-center mt-3">
            <a href="" class=" text-xs text-gray-700">网站首页</a>
            <a href="" class=" text-xs text-gray-700">会员注册</a>
            <a href="" class=" text-xs text-gray-700">找回密码</a>
          </div>
      </div>
      <div>
        <img
          src="@/assets/img/icon.png"
          alt=""
          class="h-80 w-full object-cover"
        />
      </div>
    </div>
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
.hd-button{
  @apply  bg-violet-700 text-white w-full py-2 rounded-md mt-3 duration-300 hover:bg-violet-400
}
</style>