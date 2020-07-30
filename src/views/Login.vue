<template>
  <div class="login">
    <img
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596106829856&di=a5dfed5324ea17392cf900bb777a06c4&imgtype=0&src=http%3A%2F%2Fimg.qy6.com%2Fnew7%2Fszweichen66%2F1334151227.jpg"
      alt="logo"
      class="login-logo"
    />
    <h2 class="title">login</h2>
    <div class="login-bg animate__animated animate__fadeInRight">
      <el-form
        v-show="delay"
        ref="loginform"
        class="login-form animate__animated animate__fadeInLeft"
        :model="loginForm"
        :rules="loginRules"
      >
        animation test
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      delay: false,
      loginForm: {},
      loginRules: {},
    }
  },
  created() {
    setTimeout(() => {
      this.delay=true
    }, 1100);
  },
}
</script>

<style>
.login {
  width: 100%;
  height: 100%;
}
.login-logo {
  width: 150px;
  height: 100px;
  /* outline: 1px solid aqua; */
}
.login-bg {
  margin: 0 auto;
  width: 70%;
  height: 400px;
  outline: 1px solid peru;
  --animate-duration: 1.5s;
}
.el-form {
  --animate-duration: 1.5s;
  /* --animate-delay: 2s; */
}
.login-form {
  width: 400px;
  height: 100%;
  outline: 1px solid seagreen;
  float: right;
}
.title {
  margin: 0px auto 30px auto;
  text-align: center;
  color: #707070;
}
</style>
