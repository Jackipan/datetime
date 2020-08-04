<template>
  <div class="login">
    <img
      :src="`${publicPath}image/login/logo.png`"
      alt="logo"
      class="login-logo"
    />
    <h2 class="title">物联网酒精测试仪管理系统</h2>
    <div class="login-bg animate__animated animate__fadeInRight">
      <el-form
        v-show="delay"
        ref="loginform"
        class="login-form animate__animated animate__fadeInLeft"
        :model="loginForm"
        :rules="loginRules"
      >
        <span class="welcome">欢迎您登录</span>
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            type="text"
            auto-complete="off"
            placeholder="请输入用户名"
          >
            <svg-icon
              slot="prefix"
              class="el-input__icon input-icon"
              icon-class="user"
            />
          </el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            auto-complete="off"
            placeholder="密码"
            @keyup.enter.native="handleLogin"
          >
            <svg-icon
              slot="prefix"
              class="el-input__icon input-icon"
              icon-class="password"
            />
            <svg-icon
              slot="suffix"
              class="el-input__icon input-icon"
              icon-class="eye"
              @click="cgEye"
            ></svg-icon>
          </el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            auto-complete="off"
            placeholder="验证码"
            style="width: 67%"
            @keyup.enter.native="handleLogin"
          >
            <svg-icon
              slot="prefix"
              class="el-input__icon input-icon"
              icon-class="validCode"
            />
          </el-input>
          <div class="login-code"><img :src="codeUrl" @click="getCode" /></div>
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="loading"
            class="login-btn"
            @click.native.prevent="handleLogin"
          >
            <span v-if="!loading">登 &emsp; 录</span>
            <span v-else>登 录 中...</span>
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import codeimg from '../../public/image/login/code.png'
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      delay: false,
      loginForm: {
        username: 'admin',
        password: '123456',
        code: '',
      },
      logintext: '',
      loading: false,
      loginRules: {},
      codeUrl: codeimg,
    }
  },
  created() {
    setTimeout(() => {
      this.delay = true
    }, 1100)
  },
  methods: {
    handleLogin() {
      console.log('login')
    },
    cgEye() {
      // this.
    },
    getCode() {
      console.log('getcode')
    },
  },
}
</script>

<style lang="scss">
$path: '/image/';
.login {
  width: 100%;
  height: 100%;
  background-color: #273263;
  background-image: url($path+'login/bg.png');
  background-size: cover;
}
.login-logo {
  width: 89px;
  height: 90px;
  margin-top: 80px;
  /* outline: 1px solid aqua; */
}
.login-bg {
  margin: 0 auto;
  width: 75%;
  height: 450px;
  border-radius: 20px;
  background: url($path+'login/bg-in.png');
  // outline: 1px solid peru;
  --animate-duration: 1.5s;
}
.el-form {
  --animate-duration: 1.5s;
  /* --animate-delay: 2s; */
}
.login-form {
  width: 450px;
  height: 100%;
  float: right;
  border-radius: 0 20px 20px 0;
  background: rgba(255, 255, 255, 1);
  .welcome {
    font-size: 22px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: rgba(27, 107, 205, 1);
    display: inline-block;
    margin-top: 37px;
    margin-bottom: 10px;
  }
  .el-form-item {
    width: 63%;
    margin: 40px auto;
    .input-icon {
      height: 47px;
      width: 21px;
      margin-left: 2px;
    }
    input {
      font-size: 18px;
      height: 47px;
      padding-left: 30px;
    }
    .login-btn {
      width: 280px;
      height: 64px;
      color: #ffffff;
      border-radius: 40px;
      background: url($path+'login/login-btn.png') no-repeat;
      background-size: auto;
      span{
        font-size: 22px;
        display: inline-block;
      }
    }
    .login-code {
      width: 33%;
      display: inline-block;
      height: 38px;
      // float: right;

      img {
        cursor: pointer;
        vertical-align: middle;
      }
    }
  }
}
.title {
  margin: 0px auto 30px auto;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
  margin-top: 40px;
}
</style>
