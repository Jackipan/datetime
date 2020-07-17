<template>
   <div class="block">
    <el-carousel trigger="click" height="240px">
      <el-carousel-item v-for="item in images" :key="item.src">
        <img class="image-scroll" :src="item.src" :alt="item.title" :title="item.title">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {src:'https://www.bing.com/th?id=OHR.WinchesterCrypt_ZH-CN1683778044_320x240.jpg&rf=LaDigue_320x240.jpg&pid=HpEdgeAn',
        title:'被洪水淹没的温彻斯特大教堂地下室，英国汉普郡'},
        {src:'https://www.bing.com/th?id=OHR.WaterRipplesVideo_ZH-CN8790763092_320x240.jpg&rf=LaDigue_320x240.jpg&pid=hp',
        title:'埃热泽尔斯湖面上的波纹，拉脱维亚拉特加尔地区'},
        {src:'https://www.bing.com/th?id=OHR.SunnyRainforest_ZH-CN1412617420_320x240.jpg&rf=LaDigue_320x240.jpg&pid=hp',
        title:'奥林匹克国家公园中的可可西里雨林，华盛顿州'},
        {src:'https://www.bing.com/th?id=OHR.NorfolkPups_ZH-CN0794024596_320x240.jpg&rf=LaDigue_320x240.jpg&pid=hp',
        title:'在沙滩上休息的灰海豹幼崽，英国Blakeney Point自然保护区'}        
      ]
    }
  },
}
</script>
<style scoped>
.el-carousel{
  padding-top: 30px;
  margin: 0 auto;
  width: 400px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
  }
  .image-scroll{
    width: 100%;
    height: 100%;
    background-size: cover;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
