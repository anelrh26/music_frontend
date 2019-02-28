<template>
  <div class="home">
    <NoteToolkit/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <keyboard msg="Music Thingy"/>
    <staff/>
    <p>Song</p>
    <p>{{pattern}}</p>
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
  data() {
    return {
      song: this.$store.state.song,
    };
  },
  computed: {
    pattern() {
      let pattern = '';
      for (let i = 0; i < this.song.length; i++) {
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
