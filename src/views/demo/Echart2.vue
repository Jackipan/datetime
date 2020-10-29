<template>
  <div
    :className="className"
    :style="{ width: width, height: height }"
  />
</template>

<script>
require('echarts/theme/macarons')
export default {
  name: 'DrinkDriv',
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.chart = this.$echarts.init(this.$el, 'macarons')
      const bgColor = '#fff'
      const title = '     全部 条'
      const color = [
        '#457AE5',
        '#FFA800',
        '#FF3454'
      ]
      const echartData = [
        {
          name: '未超标',
          value: '3720'
        },
        {
          name: '饮酒',
          value: '2920'
        },
        {
          name: '醉酒',
          value: '2200'
        }
      ]

      const formatNumber = function(num) {
        const reg = /(?=(\B)(\d{3})+$)/g
        return num.toString().replace(reg, ',')
      }
      const total = echartData.reduce((a, b) => {
        return a + b.value * 1
      }, 0)

      this.chart.setOption({
        backgroundColor: bgColor,
        color: color,
        // hover 显示
        // tooltip: {
        //     trigger: 'item'
        // },
        title: [
          {
            // 圆环中间的显示内容
            text: '{val|' + formatNumber(total) + '}\n{name|' + title + '}',
            top: '47%',
            left: '60px',
            textStyle: {
              rich: {
                name: {
                  fontSize: 14,
                  fontWeight: 'normal',
                  color: '#666666',
                  padding: [10, 0]
                },
                val: {
                  fontSize: 32,
                  fontWeight: 'bold',
                  color: '#333333'
                }
              }
            }
          },
          // 标题
          {
            text: '酒精测试数据',
            top: 0,
            left: 0,
            textStyle: {
              fontSize: 18,
              color: '#313133',
              fontWeight: 'Bold'
            }
          }
        ],

        // 具体项的结束说明
        legend: {
          orient: 'vertical',
          icon: 'rect',
          x: '58%',
          y: '70%',
          itemWidth: 12,
          itemHeight: 12,
          align: 'left',
          textStyle: {
            rich: {
              name: {
                fontSize: 14
              },
              value: {
                fontSize: 14,
                padding: [0, 15, 0, 15]
              },
              unit: {
                fontSize: 12
              },
              present: {
                fontSize: 14
              }
            }
          },
          formatter: function(name) {
            let res = echartData.filter(v => v.name === name)
            res = res[0] || {}
            const unit = res.unit || ''
            return (
              '{name|' +
              name +
              '}  {value|' +
              res.value +
              '}{unit|' +
              unit +
              '}{present|' +
              (res.value / total * 100).toFixed(1) +
              '%' +
              '}'
            )
          }
          // data: legendName
        },

        // 环形展示的数据
        series: [
          {
            type: 'pie',
            radius: ['45%', '60%'], // 圆环的宽度
            center: ['110px', '54%'], // 圆心的位置
            data: echartData,
            hoverAnimation: false,
            itemStyle: {
              normal: {
                borderColor: bgColor, // 间隙颜色
                borderWidth: 5 // 数据环之间的间隙
              }
            },

            // 由圆环延伸出的线
            labelLine: {
              show: false
              // normal: {
              //   length: 20,
              //   length2: 120,
              //   lineStyle: {
              //     color: '#e6e6e6'
              //   }
              // }
            },
            label: {
              show: false
              // normal: {
              //   formatter: params => {
              //     return (
              //       '{icon|●}{name|' +
              //       params.name +
              //       '}{value|' +
              //       formatNumber(params.value) +
              //       '}'
              //     )
              //   },
              //   padding: [0, -100, 25, -100],
              //   rich: {
              //     icon: {
              //       fontSize: 16
              //     },
              //     name: {
              //       fontSize: 14,
              //       padding: [0, 10, 0, 4],
              //       color: '#666666'
              //     },
              //     value: {
              //       fontSize: 18,
              //       fontWeight: 'bold',
              //       color: '#333333'
              //     }
              //   }
              // }
            }
          }
        ]
      })
    }
  }
}
</script>

<style></style>
