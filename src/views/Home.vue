<template>
  <div class="home">
    <NoteToolkit/>
    <keyboard msg="Music Thingy"/>
    <staff/>
    <button @click="clickMe()">CLICK ME</button>
    <p>Song</p>
    <p>{{pattern}}</p>
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
  computed: {
    pattern() {
      let pattern = '';
      for (let i = 0; i < this.song.length; i += 1) {
        const note = this.song[i];
        if (i === this.song.length - 1) {
          pattern = `${pattern} ${note}`;
        } else {
          pattern = `${pattern} ${note} ,`;
        }
      }

      return pattern;
    },
  },
};
</script>
