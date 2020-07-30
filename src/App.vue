<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
#app {
  padding-left: calc(100vw - 100%);
}
</style>
