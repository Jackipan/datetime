<template>
  <div id="container"></div>
</template>

<script>
// import { MP } from '@/utils/map'
import '@/assets/js/api.map.baidu.com.js'
export default {
  data() {
    return {}
  },
  created() {
    // console.log('BMap', MP())
  },
  mounted() {
    this.$nextTick(() => {
      // var _this = this;
      // 百度地图
      // MP().then(BMap => {
      var map = new BMap.Map('container')
      var point = new BMap.Point(102.550963, 29.572012)
      map.centerAndZoom(point, 12)
      map.enableScrollWheelZoom(true)
      var opts = {offset: new BMap.Size(150, 5)}
      map.addControl(new BMap.ScaleControl(opts))
      // })
    })
  },
}
</script>

<style>
#container {
  height: 500px;
}
</style>
