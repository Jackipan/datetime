<template>
  <div class="home">
      <div class="nav">
        <router-link to="/home">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/Zjxx">Orientation</router-link> |
        <router-link to="/Captcha">Captcha</router-link> |
        <router-link to="/upload">Upload</router-link> |
        <router-link to="/chat">Chat</router-link> |
        <router-link to="/alumni">Alumni</router-link> |
        <router-link to="/virtual">虚拟列表</router-link> |
        <router-link to="/echart">map</router-link> |
        <router-link to="/echart2">echart2</router-link> |
        <router-link to="/components">components</router-link> |
        <router-link to="/tree">tree</router-link>
      </div>
      <span class="ip">{{net}}  本机ip： {{ ip }} <router-link :to="{name:'STD'}">STD</router-link> </span>
      <router-view />
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data() {
    return {
      ip: '',
      net: '',
      imgUrl: ''
    }
  },
  watch: {
    $route(){
      setTimeout(() => {
        console.log(this.$route);
      }, 1000);
    }
  },
  created() {
    this.getIp()
    this.netStatus()
  },
  updated() {
    this.netStatus()
  },
  methods: {
    getIp() {
      Axios.get('getIp')
        .then((result) => {
          this.$store.commit('mutationSetIp', result.data)
          this.ip = this.$store.state.ip
        })
    },
    netStatus(){
      if (navigator.onLine) {
        this.net = navigator.connection.effectiveType
      } else {
        this.net = "无网络"
      }
    }
  }
}
</script>

<style>
.home{
  position: relative;
  width: 90%;
  height: 100%;
  text-align: center;
  color: #ffffff;
  margin: 0 auto;
}
.nav {
  padding: 30px;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
.language {
  width: 40px;
  height: 40px;
}
.ip{
  display: inline-block;
  width: 100%;
  position: relative;
  bottom: 10px;
  background-color: rgba(220, 220, 220, 0.38);
  line-height: 50px;
  color: #2c3e50;
}
</style>
