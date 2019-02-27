<template>
  <div class="home">
    <NoteToolkit/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <keyboard msg="Music Thingy"/>
    <staff/>
    <div id="boo"></div>
  </div>
</template>

<script>
import NoteToolkit from '@/components/NoteToolkit.vue';
import keyboard from '@/components/keyboard.vue';
import staff from '@/components/staff.vue';

export default {
  name: 'home',
  components: {
    NoteToolkit,
    keyboard,
    staff,
  },
};
</script>
