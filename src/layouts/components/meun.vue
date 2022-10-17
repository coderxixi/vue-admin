<template>
  <div
    class="menu w-[200px] bg-gray-800 duration-100 p-4 md:block"
    :class="{ close: menuService.close.value }"
  >
    <div class="logo text-gray-300 flex items-center justify-center">
      <img
        class="text-fuchsia-400 mr-2 w-12 rounded-3xl"
        src="@/assets/img/avar.jpeg"
      />
      <!-- <i class="fab fa-adn text-fuchsia-400 mr-2 text-[35px]"></i> -->
      <span>后台模版</span>
    </div>
    <!-- 菜单 -->
    <div class="left-container">
      <dl
        class="text-gray-300 text-sm"
        v-for="(route, index) of menuService.menus.value"
        :key="index"
      >
        <dt class="flex justify-between" @click="route.isClick = true">
          <div class="flex items-center justify-between">
            <section>
              <i class="fab mr-3 text-[18px]" :class="route.icon"></i>
              <span> {{ route.title }}</span>
            </section>
          </div>
          <i
            class="fas fa-angle-down duration-300"
            :class="{ 'rotate-180': route.isClick }"
          ></i>
        </dt>

        <dd   v-show="route.isClick ||menuService.close.value">
          <div
            @click="$router.push({ name: childrenRoute.route })"
            v-for="(childrenRoute, index) of route.children"
            :key="index"
            :class="{ active: childrenRoute.isClick }"
            class="bg-zinc-600 mt-2 py-2 rounded-md text-white text-center"
          >
            <span>{{ childrenRoute.title }}</span>
          </div>
        </dd>
      </dl>
    </div>
    <!-- 遮罩层 -->
    <div class="bg block md:hidden"></div>
  </div>
</template>
<script setup lang="ts">
import { IMenu } from "#/menu";
import menuStore from "@/store/menuStore";
import { useRoute } from "vue-router";
import menuService from "@/composables/menu";
import { watch } from "vue";
const route = useRoute();
const routerStore = menuStore();
watch(
  route,
  () => {
    menuService.setCurrentmenu(route);
  },
  { immediate: true }
);
//  const resetMuen = () => {
//   menuService.menus.value.forEach((item) => {
//     item.isClick = false;
//     item.children?.forEach((item) => {
//       item.isClick = false;
//     });
//   });
// };
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
.menu {
  &.close {
    // @media screen and (min-width: 768px;){
    // }
    width: auto;
    .logo {
      @apply hidden;
    }
    .left-container {
      dl {
        dt {
          justify-content: center;
          section {
            i {
              @apply m-0;
            }
            span {
              @apply hidden;
            }
            &:nth-of-type(2) {
              @apply hidden;
            }
          }
          .fa-angle-down {
            @apply hidden;
          }
        }
        &:hover {
          dd {
            display: block !important;
            @apply absolute left-full w-[200px] z-10  bg-gray-800  rounded-md top-0;
          }
        }
        dd{
          display: none;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .menu {
    @apply h-screen w-[200px] absolute left-0 top-0 z-10;
    &.close {
    }
    &.bg {
      @apply bg-red-700 opacity-75 w-screen h-screen absolute left-0 top-0;
    }
  }
}
</style>