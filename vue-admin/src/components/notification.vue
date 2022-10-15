<template>
  <div class="notification">
    <i class="fab fa-algolia cursor-pointer" @click.stop="handleClick"></i>
    <el-tabs v-model="activeName" class="lists" v-show="show" @click.stop>
    <el-tab-pane label="站内消息" name="first">
     <a href="http://" >
        框架很快就会看见哈师傅看见啊书法考级哈打开肌肤哈空间发挥空间撒谎饭卡设计开发和科技的飞机啊是
        框架很快就会看见哈师傅看见啊书法考级哈打开肌肤哈空间发挥空间撒谎饭卡设计开发和科技的飞机啊是
        框架很快就会看见哈师傅看见啊书法考级哈打开肌肤哈空间发挥空间撒谎饭卡设计开发和科技的飞机啊是
        框架很快就会看见哈师傅看见啊书法考级哈打开肌肤哈空间发挥空间撒谎饭卡设计开发和科技的飞机啊是
        框架很快就会看见哈师傅看见啊书法考级哈打开肌肤哈空间发挥空间撒谎饭卡设计开发和科技的飞机啊是
        框架很快就会看见哈师傅看见啊书法考级哈打开肌肤哈空间发挥空间撒谎饭卡设计开发和科技的飞机啊是
     </a>
     <a href="http://" >
        框架很快就会看见哈师傅看见啊书法考级哈打开肌肤哈空间发挥空间撒谎饭卡设计开发和科技的飞机啊是
        框架很快就会看见哈师傅看见啊书法考级哈打开肌肤哈空间发挥空间撒谎饭卡设计开发和科技的飞机啊是
        框架很快就会看见哈师傅看见啊书法考级哈打开肌肤哈空间发挥空间撒谎饭卡设计开发和科技的飞机啊是
        框架很快就会看见哈师傅看见啊书法考级哈打开肌肤哈空间发挥空间撒谎饭卡设计开发和科技的飞机啊是
        框架很快就会看见哈师傅看见啊书法考级哈打开肌肤哈空间发挥空间撒谎饭卡设计开发和科技的飞机啊是
        框架很快就会看见哈师傅看见啊书法考级哈打开肌肤哈空间发挥空间撒谎饭卡设计开发和科技的飞机啊是
     </a>
     <a href="http://" >
        框架很快就会看见哈师傅看见啊书法考级哈打开肌肤哈空间发挥空间撒谎饭卡设计开发和科技的飞机啊是
        框架很快就会看见哈师傅看见啊书法考级哈打开肌肤哈空间发挥空间撒谎饭卡设计开发和科技的飞机啊是
        框架很快就会看见哈师傅看见啊书法考级哈打开肌肤哈空间发挥空间撒谎饭卡设计开发和科技的飞机啊是
        框架很快就会看见哈师傅看见啊书法考级哈打开肌肤哈空间发挥空间撒谎饭卡设计开发和科技的飞机啊是
        框架很快就会看见哈师傅看见啊书法考级哈打开肌肤哈空间发挥空间撒谎饭卡设计开发和科技的飞机啊是
        框架很快就会看见哈师傅看见啊书法考级哈打开肌肤哈空间发挥空间撒谎饭卡设计开发和科技的飞机啊是
     </a>
    </el-tab-pane>
    <el-tab-pane label="系统通知" name="second">
       
    </el-tab-pane>
  </el-tabs>
  </div>
 
</template>

<script setup lang="ts">
import { ref,nextTick} from 'vue';

const activeName=ref('site');
const show=ref(false)
const handleClick=()=>{
   show.value=!show.value
}
nextTick(()=>{
  document.documentElement.addEventListener("click",(e)=>{
    
    show.value=false
  })
})
</script>

<style scoped lang="scss">
.notification{
  @apply relative;
  .lists{
    @apply absolute bg-white p-5 border rounded-md shadow-sm right-[-60px] z-10 w-[300px] text-sm;
     a{
      @apply truncate overflow-hidden block border-b pb-2 my-3 hover:text-violet-800;
     }
  }
}
</style>