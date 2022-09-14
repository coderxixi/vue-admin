<template>
  <div class="bg-slate-300 h-screen flex justify-center items-center p-5">
    <div
      class="
        w-[720px]
        bg-white
        grid-cols-2
        md:grid
        -translate-y-16
        rounded-md
        shadow-sm
        overflow-hidden
      "
    >
      <div class="p-6">
        <h2 class="text-center text-gray-700 text-lg">会员登录</h2>
        <div>
          <hdInput />
          <hdInput />
        </div>
       <hdButton/>
        <div class="flex space-x-4 justify-center mt-3">
          <hdLink>网站首页</hdLink>
          <hdLink>会员注册</hdLink>
          <hdLink>找回密码</hdLink>
        </div>
      </div>
      <div class="hidden md:block">
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
import hdInput from "@/components/from/hd-input.vue";
import hdButton from "@/components/from/hd-button.vue";
import hdLink from "@/components/from/hd-link.vue"
components: {
  hdInput
  hdButton
  hdLink
}
</script>

<style scoped>

</style>