<template>
  <div>
    <form @submit="onSubmit">
      <input type="text" v-model="usernameValue"/>
       <p v-if="errors.username">{{errors.username}}</p>
       <input type="text" v-model="passwordValue"/>
       <p v-if="errors.password">{{errors.password}}</p>
       <button type="submit">提交</button>
    </form>
  
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {defineRule,ErrorMessage,useField,configure, useForm} from "vee-validate";
import { required, min, max, confirmed, email } from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";
import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json";
import * as yup from 'yup'
defineRule('email',email);
defineRule('required',required);
configure(({

  generateMessage:localize('zh_CN',zh_CN)
}))
const {handleSubmit,errors}=useForm({
  initialValues:{
    username:'xixi',
    password:'123'
  },
  validationSchema:{
    username: yup.string().required("用户名不能为空").email("邮箱格式错误"),  // {required:true,email:true},
    password:{required:true}

  }
})
const {value:usernameValue}=useField('username',{},{label:'用户名'});
const {value:passwordValue}=useField('password',{},{label:'密码'});
const onSubmit=handleSubmit((value:any)=>{
  console.log('val',value);
  
})
</script>

<style scoped lang="scss">
  div {
  @apply flex w-screen h-screen justify-center items-center bg-slate-500;
  input {
    @apply border-4 p-2 rounded-md border-violet-500 outline-none;
  }
}
</style>