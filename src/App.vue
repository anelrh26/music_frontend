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
    <el-container>
      <el-aside width="455px" style="background-color: rgb(238, 241, 246)">
        <Songs/>
      </el-aside>
      <el-main>
        <router-view id="content"/>
      </el-main>
    </el-container>
  </div>
</template>


<script>
import Songs from "@/components/Songs.vue";

export default {
  name: "home",
  components: {
    Songs
  },
  data() {
    const item = {
      date: "2016-05-02",
      song: "Cancion 1"
    };
    return {
      activeIndex: "1",
      tableData: Array(10).fill(item),
      search: ""
    };
  }
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

#content {
  margin-top: 40px;
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
