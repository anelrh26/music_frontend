<template>
  <div class="home">
    <NoteToolkit/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <keyboard msg="Music Thingy"/>
  </div>
</template>

<script>
import NoteToolkit from '@/components/NoteToolkit.vue';

import keyboard from '@/components/keyboard.vue';

export default {
  name: 'home',
  components: {
    NoteToolkit,
    keyboard,
  },
};
</script>
