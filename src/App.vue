<template>
  <div id="app" ref="app" :style="{ 'background-image': 'url(' + this.imgUrl + ')' }">
    <div class="bg bg-blur"></div>
    <div class="content content-front">
      <router-view />
    </div>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data() {
    return {
      imgUrl: '',
    }
  },
  created() {
    this.getImg()
  },
  mounted() {
    window.onerror = function(a, b, c, d, e) {
      console.log(`/m?p=${location.href}&a=${a}&b=${b}&c=${c}&d=${d}&e=${e.stack}`);
      const sss = new Image().src = `/m?p=${location.href}&a=${a}&b=${b}&c=${c}&d=${d}&e=${e.stack}`
      console.log('==============error==============', sss);
    }
  },
  methods: {
    getImg() {
      Axios.get('https://api.xygeng.cn/Bing/url/').then((res) => {
        this.imgUrl = res.data.data
        // this.$refs.app.style.background="url("+ this.imgUrl +")"
        // console.log(this.imgUrl)
      })
    },
  },
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  /* font-family: SourceHanSansCN-Bold; */
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  padding-left: calc(100vw - 100%);
  background-size: 100% 100%;
}
.content {
  color: #ffffff;
  font-size: 18px;
}
.bg {
  background-color: #aa9874;
  opacity: 0.8;
  height: 90%;
  width: 80%;
  margin: 0 auto;
  text-align: center;
}
.bg-blur {
  float: left;
  width: 80%;
  margin: 0 auto;
  background-color: hsla(0, 0%, 100%, 0.5);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
}
.content-front {
  position: absolute;
  width: 80%;
  left: 10%;
  right: 10px;
  top: 30px;
  height: 90%;
  /* line-height: 600px; */
  text-align: center;
}
</style>
