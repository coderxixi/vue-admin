<template>
  <div>
    <form @submit="onSubmit">
    <Form @submit="onSubmit">
      <input type="text" v-model="usernameValue"/>
       <p v-if="errors.username">{{errors.username}}</p>
       <input type="text" v-model="passwordValue"/>
       <p v-if="errors.password">{{errors.password}}</p>
       <button type="submit">提交</button>
    </form>
    </Form>
  
  </div>
</template>

<script setup lang="ts">
import v from "@/plugins/validate"
const {handleSubmit,errors}=v.useForm({
  initialValues:{
    username:'xixi',
    password:'123'
  },
  validationSchema:{
    username: v.yup.string().required("用户名不能为空").email("邮箱格式错误"),  // {required:true,email:true},
    password:{required:true}

  }
})
const {value:usernameValue}=v.useField('username',{},{label:'用户名'});
const {value:passwordValue}=v.useField('password',{},{label:'密码'});
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