<template>
  <div class="home">
    <NoteToolkit/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <keyboard msg="Music Thingy"/>
    <div id="boo"></div>
  </div>
</template>

<script>
import NoteToolkit from '@/components/NoteToolkit.vue';
import keyboard from '@/components/keyboard.vue';
// import Vex from 'vexflow';

export default {
  name: 'home',
  components: {
    NoteToolkit,
    keyboard,
  },
};
</script>
