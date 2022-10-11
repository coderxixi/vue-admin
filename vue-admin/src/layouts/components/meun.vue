<template>
  <div>
    <dl class="text-gray-300 text-sm" v-for="(item ,index) of menus" :key="index">
      <dt class="flex justify-between" @click="hadle(item)">
        <div class="flex items-center justify-between">
         
          <section>
            <i class="fab mr-3 text-[18px]" :class="item.icon"></i>
            {{ item.title }}
            </section>
        </div>
        <i class="fas fa-angle-down"></i>
      </dt>
      <dd v-show="item.active" @click="clickDd(val)" v-for="val of item.children" :key="val.title">
        <div
          :class="{ active: val.active }"
          class="bg-zinc-600 mt-2 py-2 rounded-md text-white text-center"
        >
          {{ val.title }}
        </div>
      </dd>
    </dl>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
interface IMenuItem {
  title: string;
  icon?: string;
  active?:boolean
}

interface IMenu extends IMenuItem {
  // active: boolean;
  children?: IMenuItem[];
}
let menus = ref<IMenu[]>([
  {
    title: "错误页面",
    icon: "fa-algolia",
    active:true,
    children: [
      {
        title: "404页面",
        active:true
        
      },
      {
        title: "403页面",
        
      },
      {
        title: "402页面",
        
      },
    ],
  },
  {
    title: "编辑器",
    icon: "fa-algolia",
    children: [
      {
        title: "mardowm编辑器",
        
      },
      {
        title: "富文本编辑器",
        
      },
     
    ],
  },
]);

const clickDd = (val: any) => {
  resetMuen();
  val.active = true;
};
const resetMuen = () => {
  menus.value.forEach((item) => {
   item.active=false
   item.children?.forEach((item)=>{
     item.active=false
   })
  });
};

const hadle = (pmenu: IMenu, cmenu?: IMenu) => {
  resetMuen();
  pmenu.active = true;
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