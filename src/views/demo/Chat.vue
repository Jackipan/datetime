<template>
  <div class="app-container">
    <span>
      chat
    </span>
    <el-input
      type="textarea"
      :cols="60"
      :autosize="{ minRows: 12, maxRows: 13 }"
      v-model="msgList"
    ></el-input>
    <el-input class="message" ref="message" v-model="message" @keyup.enter="sendMsg"></el-input>
    <el-button type="success" @click="sendMsg">发送</el-button>
    <br />
    <p>用户：{{ user }}</p>
    <el-button @click="joinRoom">加入群聊</el-button>
    <el-button @click="exitRoom">退出群聊</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ws: null,
      message: '',
      msgList: '',
      readonly: true,
      user: '123',
    }
  },
  mounted() {
    this.initWebsocket()
  },
  methods: {
    sendMsg() {
      console.log(this.message)
      this.message = ''
      this.$refs.message.focus()
    },
    joinRoom() {
      console.log('joinRoom')
    },
    exitRoom() {
      console.log('exitRoom')
    },
    initWebsocket() {
      let _this = this
      if (window.WebSocket) {
        console.log(process.env.VUE_APP_URL);
        // let sip = '房间号'
        var url =process.env.VUE_APP_URL_WS + '/imserver/' + this.user
        let ws = new WebSocket(url)
        _this.ws = ws
        ws.onopen = function() {
          console.log('连接成功：', url)
        }
        ws.onclose = function() {
          console.log('服务器连接关闭: ' + url)
        }
        ws.onerror = function() {
          console.log('服务器连接出错: ' + url)
        }
        ws.onmessage = function(e) {
          //接收服务器返回的数据
          let resData = JSON.parse(e.data)
          _this.count = resData.count
          _this.list = [
            ..._this.list,
            {
              user: resData.userId,
              username: resData.username,
              avatar: resData.avatar,
              content: resData.msg,
            },
          ]
        }
      }
    },
    scrollBottom(){
      let el = this.$refs.message
      el.scrollTop = el.scrollHeight
    }
  },
}
</script>

<style scoped>
.app-container {
  width: 360px;
  margin: 0 auto;
}
.message {
  width: 80%;
}
</style>
