<template>
  <el-container>
    <el-aside width="430px" style="background-color: rgb(238, 241, 246)">
      <Songs/>
    </el-aside>
    <el-main>
      <div class="home">
        <NoteToolkit/>
        <keyboard msg="Music Thingy"/>
        <staff/>
        <button @click="clickMe()">CLICK ME</button>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import NoteToolkit from "@/components/NoteToolkit.vue";
import keyboard from "@/components/keyboard.vue";
import Songs from "@/components/Songs.vue";

export default {
  name: "home",
  components: {
    NoteToolkit,
    keyboard,
    Songs
  },
  data() {
    return {
      song: this.$store.state.song
    };
  },
  methods: {
    clickMe() {
      this.$store.dispatch("fetchSongs");
    }
  }
};
</script>
