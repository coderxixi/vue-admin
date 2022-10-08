<template>
  <div>
    <Form 
    @submit="onSubmit"
     > 
     <Field
     name="account" 
     :validate-on-input="true"
     :rules="{required:true,email:true}"
     #default="{field,errorMessage}"
     >
     <input v-bind="field" v-model="account"/>
     </Field>
  
     </Form>
  
  </div>
</template>

<script setup lang="ts">
  import {ref} from "vue"
import { Form, Field ,ErrorMessage,defineRule,configure} from "vee-validate";
import {required,min,max,confirmed,email} from "@vee-validate/rules";
import {localize} from "@vee-validate/i18n";
import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json"


defineRule('email',email);
defineRule('required',required);
const emails=(value:any)=>{
  return /@/.test(value)?true:"邮箱格式错误"
}
const account = ref<string>("");
const onSubmit=(value:string)=>{
   console.log("valuse",value);
   
}
</script>

<style lang="scss">
div {
  @apply flex w-screen h-screen justify-center items-center bg-slate-500;
  input {
    @apply border-4 p-2 rounded-md border-violet-500 outline-none;
  }
}
</style>