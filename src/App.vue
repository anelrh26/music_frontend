<template>
  <div id="app">
    <el-menu
      theme="dark"
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      :router="true"
    >
      <el-menu-item index="1" :route="{ name: '/' }">Home</el-menu-item>
      <el-menu-item index="2" :route="{ name: '/about' }">About</el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>


<script>
export default {
  name: 'home',
  data() {
    return {
      homeRoute: '/',
      aboutRoute: '/about',
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/*
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}*/
</style>
