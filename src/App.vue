<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
body{
  background-color: #fff;
  color:#000;
}
*{
  margin:0;
  padding:0;
  font-family: "HP Simplified Light", "hpsimplified", "微软雅黑", "arial";
}
#app {
  font-family: "HP Simplified Light",'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
