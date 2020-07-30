<template>
  <div class="home">
      <div id="nav">
        <router-link to="/home">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/Zjxx">Orientation</router-link> |
        <router-link to="/Captcha">Captcha</router-link> |
        <router-link to="/upload">Upload</router-link> |
        <router-link to="/chat">Chat</router-link> |
        <router-link to="/imgCut">图片剪裁</router-link> |
        <router-link to="/virtual">虚拟列表</router-link>
      </div>
      <span>本机ip： {{ ip }}</span>
      <router-view />
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data() {
    return {
      ip: '',
    }
  },
  created() {
    this.getIp()
  },
  methods: {
    getIp() {
      Axios.get('getIp')
        .then((result) => {
          console.log(this.$store.state.name)
          console.log('result.data', result)
          this.$store.commit('mutationSetIp', result.data)
          this.ip = this.$store.state.ip
          console.log(this.$store.state.ip)
          console.log('getip: ', result.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style>
#app {
  text-align: center;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.language {
  width: 40px;
  height: 40px;
}
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
