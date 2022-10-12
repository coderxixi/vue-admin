<template>
  <Form
    class="bg-slate-300 h-screen flex justify-center items-center p-5"
    @submit="onSubmit"
    :validation-schema="schema"
    #default="{ errors }"
  >
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
          <Field
            name="account"
            placeholder="情输入邮箱或手机号"
            class="h-input"
            value="xixi@qq.com"
            :validate-on-input="true"
          />
          <div v-if="errors.account" class="hd-error">情输入邮箱或手机号</div>
          <!-- <ErrorMessage name="account"  as="div" class="hd-error"/> -->
          <Field
            value="88888"
            name="password"
            type="password"
            class="h-input"
            :validate-on-input="true"
          />

          <ErrorMessage name="password" as="div" class="hd-error" />

          <!-- <hdInput/> -->
          <!-- <hdInput/> -->
        </div>
        <hdButton />
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
          class="h-[380px] w-full object-cover"
        />
      </div>
    </div>
  </Form>
</template>

<script setup lang="ts">
// import userApi from "@/api/userApi"
import v from "@/plugins/validate";
import { store } from "@/utils/";
import hdInput from "@/components/from/hdInput.vue";
import hdButton from "@/components/from/hdButton.vue";
import hdLink from "@/components/from/hdLink.vue";

import userApi from "@/api/userApi";
import { useRouter } from "vue-router";
import { log } from 'console';

const { Field, Form, ErrorMessage } = v;
components: {
  hdInput;
  hdButton;
  hdLink;
}
const router = useRouter();
const onSubmit = async (valuse) => {
  const {
    result: { token },
  } = await userApi.login(valuse);
  store.set("token", {
    expire: 130000,
    token,
  });
  router.push({ name: "home" });
};
const schema = {
  account: { required: true, regex: /.+@.|\d{11}/i },
  password: { required: true, min: 3 },
};
</script>
<script lang="ts">
export default {
  route: {
    name: "login",
    meta: {
      guest: true,
    },
  },
};
</script>
<style scoped>
.h-input {
  @apply border rounded-sm 
  outline-none w-full
   py-1 px-4 border-gray-200 
   placeholder:text-sm focus:ring-2 ring-offset-2 ring-violet-600 duration-300 focus:border-white mt-5;
}
.hd-error {
  @apply rounded-md bg-pink-500 text-white text-sm px-2 mt-2;
}
</style>