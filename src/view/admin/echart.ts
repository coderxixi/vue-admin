export const echart={
  title: {
    // text: 'ECharts 入门示例'
  },
  tooltip: {},
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]

}

export const echart1={
  title: {
    text: '前端技术',
    subtext: '技术栈',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: '技术栈',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'JavaScript' },
        { value: 735, name: 'Vue3' },
        { value: 580, name: 'React' },
        { value: 484, name: 'webpack' },
        { value: 300, name: 'vite' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}