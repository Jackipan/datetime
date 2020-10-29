<template>
  <div id="app" ref="app" :style="{'background-image': 'url('+this.imgUrl+')'}">
    <router-view />
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data() {
    return {
      imgUrl: ''
    }
  },
  created() {
    this.getImg()
  },
  methods: {
    getImg(){
      Axios.get('https://api.xygeng.cn/Bing/url/').then((res) => {
        this.imgUrl = res.data.data
        // this.$refs.app.style.background="url("+ this.imgUrl +")"
        console.log(this.imgUrl);
      }).catch((err) => {
        console.log(err);
      });
    }
  },
}
</script>
<style>
#app {
  /* font-family: SourceHanSansCN-Bold; */
  height: 100%;
  text-align: center;
  padding-left: calc(100vw - 100%);
}
</style>
