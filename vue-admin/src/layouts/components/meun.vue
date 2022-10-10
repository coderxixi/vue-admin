<template>
  <div>
    <dl class="text-gray-300 text-sm" v-for="item of menus" :key="item.name">
      <dt class="flex justify-between">
        <div class="flex items-center justify-between">
          <i class="fab mr-3 text-[18px]" :class="item.icon"></i>
          <section>{{ item.name }}</section>
        </div>
        <i class="fas fa-angle-down"></i>
      </dt>
      <dd @click="clickDd(val)" v-for="val of item.children" :key="val.name">
        <div
          :class="{ active: val.active }"
          class="bg-zinc-600 mt-2 py-2 rounded-md text-white text-center"
        >
          {{ val.name }}
        </div>
      </dd>
    </dl>
  </div>
</template>

<script setup lang="ts">
import { log } from "console";
import { ref } from "vue";
interface IMenus {
  name: string;
  icon: string;
  children: [name: string];
}
let menus = ref([
  {
    name: "错误页面",
    icon: "fa-angular",
    children: [
      {
        name: "404错误",
        active: true,
      },
      {
        name: "403错误",
        active: false,
      },
      {
        name: "402错误",
        active: false,
      },
    ],
  },
  {
    name: "编辑器",
    icon: "fa-algolia",
    children: [
      {
        name: "富文本编辑器",
        active: false,
      },
      {
        name: "Mardown编辑器",
        active: false,
      },
    ],
  },
]);

const clickDd = (val) => {
  resetMuen();
  val.active=true
};
const resetMuen = () => {
  menus.value.forEach((item)=>{
    item.children.forEach((val)=>{
      val.active=false
    })
  })
};
</script>

<style scoped lang="scss">
dl {
  @apply text-gray-300 text-sm relative p-4;
  dt {
    @apply text-sm flex  cursor-pointer items-center opacity-80;
    section {
      @apply flex items-center  duration-500;
    }
  }
  dd {
    div {
      @apply opacity-80 text-xs py-3 pl-4 my-2 text-white rounded-md cursor-pointer duration-300 hover:bg-violet-500 hover:opacity-100 bg-gray-700;
      &.active {
        @apply bg-violet-700 opacity-100;
      }
    }
  }
}
</style>