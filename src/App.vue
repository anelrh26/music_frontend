<template>
  <div id="app">
    <el-menu
      theme="dark"
      class="el-menu-demo"
      mode="horizontal"
      :router="true"
      :default-active="activeIndex"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1" :route="{ name: 'home' }">Home</el-menu-item>
      <el-menu-item index="2" :route="{ name: 'about' }">About</el-menu-item>
    </el-menu>
    <router-view id="content"/>
  </div>
</template>


<script>
export default {
  name: "home",
  data() {
    return {
      activeIndex: "1"
    };
  }
};
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
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
