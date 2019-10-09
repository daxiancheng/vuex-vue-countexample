<template>
    <div id="app">
    <h1>Vue Examples</h1>
    <ul>
      <li><router-link :to="{name:'countervue'}">Counter just Vue</router-link></li>
      <li><router-link :to="{name:'countvuex'}">Counter vuex</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 40px;
}
h1{
  margin-bottom: 20px;
  margin-left: -23px;
}
a{
    color: #2c3e50;
    text-decoration: none;
}
a:visited{
    color: #2c3e50;
}
</style>