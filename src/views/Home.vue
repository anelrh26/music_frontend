<template>
  <div class="home">
    <NoteToolkit/>
    <keyboard msg="Music Thingy"/>
    <staff/>
    <button @click="clickMe()">CLICK ME</button>
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
  data() {
    return {
      song: this.$store.state.song,
    };
  },
  methods: {
    clickMe() {
      this.$store.dispatch('fetchSongs');
    },
  },
};
</script>
