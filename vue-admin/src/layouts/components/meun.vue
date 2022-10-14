<template>
  <div>
    <dl
      class="text-gray-300 text-sm"
      v-for="(route, index) of menuService.menus.value"
      :key="index"
    >
      <dt class="flex justify-between" @click="hadle(route)">
        <div class="flex items-center justify-between">
          <section>
            <i class="fab mr-3 text-[18px]" :class="route.icon"></i>
            {{ route.title }}
          </section>
        </div>
        <i
          class="fas fa-angle-down duration-300"
          :class="{ 'rotate-180': route.isClick }"
        ></i>
      </dt>
      <dd
        v-show="route.isClick"
        @click="hadle(route,childrenRoute)"
        v-for="(childrenRoute, index) of route.children"
        :key="index"
      >
        <div
          :class="{ active: childrenRoute.isClick }"
          class="bg-zinc-600 mt-2 py-2 rounded-md text-white text-center"
        >
          {{ childrenRoute.title }}
        </div>
      </dd>
    </dl>
  </div>
</template>

<script setup lang="ts">
import { IMenu } from "#/menu";
import menuStore  from "@/store/menuStore";
import { useRouter } from "vue-router";
import menuService from "@/composables/menu"
const routerService=useRouter();
const routerStore = menuStore();



const resetMuen = () => {
  menuService.menus.value.forEach((item) => {
    item.isClick = false;
    item.children?.forEach((item) => {
      item.isClick = false;
    });
  });
};

const hadle = (pmenu:IMenu, cmenu?: IMenu ) => {
  resetMuen();
  pmenu.isClick = true;
  if (cmenu) {
    cmenu.isClick = true;
    routerService.push({name:cmenu.route})
  }
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
      @apply opacity-80 text-xs py-3 pl-4 my-2 text-white rounded-md cursor-pointer duration-300 hover:bg-violet-500 hover:opacity-100 bg-gray-700
      bg-gray-700;

      &.active {
        @apply bg-violet-700 opacity-100;
      }
    }
  }
}
</style>