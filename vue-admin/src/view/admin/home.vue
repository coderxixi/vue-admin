<template>
  <div class="grid md:grid-flow-col gap-3">
    <el-card
      shadow="hover"
      :body-style="{ padding: '20px' }"
      v-for="(n, index) of data"
      :key="index"
    >
      <template #header>
        <div class="flex justify-between items-center">
          {{ n.title }}
          <el-tag type="danger" size="mini" effect="dark">月</el-tag>
        </div>
      </template>
      <section class="flex justify-between items-center">
        <span class="text-2xl"> {{ n.price }}</span>
        <i class="fab fa-algolia text-violet-500 text-4xl"></i>
      </section>
      <section class="text-xs flex justify-between mt-5">
        {{ n.totalTitle }}<span> {{ n.total }}</span>
      </section>
    </el-card>
  </div>
  <div class="  p-3 mt-5 grid md:grid-cols-2 gap-3">
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <div slot="header">
        <span>用户统计</span>
      </div>
      <div id="echart" style="height:400px;" class="w-full h-[80px] md:w-[600px]"></div>
    </el-card>
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <div slot="header">
        <span>销售额</span>
      </div>
      <div id="echart1" style="height:400px;" class="w-full h-[80px] md:w-[600px]"></div>
    </el-card>
    
     
     
  </div>
</template>

<script setup lang="ts">
import { ref,nextTick } from "vue";
import {echart,echart1} from "./echart"
interface ICard {
  title: string;
  price: number;
  icon: string;
  totalTitle: string;
  total: number;
}
const data = ref<ICard[]>([
  {
    title: "总人数",
    icon: "fab fa-algolia",
    price: 233343,
    total: 87685678,
    totalTitle: "总人数",
  },
  {
    title: "销售额",
    icon: "fab fa-accessible-icon",
    price: 233343,
    total: 87685678,
    totalTitle: "总销售额",
  },
  {
    title: "订单数",
    icon: "fab fa-angellist",
    price: 233343,
    total: 87685678,
    totalTitle: "总订单数",
  },
  {
    title: "评论数",
    icon: "fab fa-aviato",
    price: 233343,
    total: 87685678,
    totalTitle: "总评论数",
  },
]);

nextTick(()=>{
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('echart'));
var myChart1 = echarts.init(document.getElementById('echart1'));
// 绘制图表
myChart.setOption(echart);
myChart1.setOption(echart1);
})

</script>
<script lang="ts">
export default {
  route: {
    name: "home",
    meta: {},
  },
};
</script>
<style scoped>
</style>