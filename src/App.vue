<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/Zjxx">Orientation</router-link> |
      <router-link to="/Captcha">Captcha</router-link>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>
    <router-view />
  </div>
</template>

<style>
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
html,body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
