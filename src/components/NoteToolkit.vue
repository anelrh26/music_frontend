<template>
  <div class="note_toolkit">
    <el-button-group v-for="option in options" :key="option.id">
      <el-button type="primary" @click="onNoteClick(option)" :class="{ selected: option.selected }">
        <img class="icons" :src="getNoteImg(option.id)">
      </el-button>
    </el-button-group>
  </div>
</template>

<script>
export default {
  name: 'NoteToolkit',
  data() {
    return {
      options: [
        {
          selected: false,
          id: '1',
          note: 'w',
          duration: 4,
        },
        {
          selected: false,
          id: '2',
          note: 'h',
          duration: 2,
        },
        {
          selected: true,
          id: '3',
          note: 'q',
          duration: 1,
        },
        {
          selected: false,
          id: '4',
          note: '8',
          duration: 0.5,
        },
        {
          selected: false,
          id: '5',
          note: '16',
          duration: 0.25,
        },
      ],
    };
  },
  methods: {
    onNoteClick(option) {
      for (let i = 0; i < this.options.length; i += 1) {
        if (option.id === this.options[i].id) {
          this.options[i].selected = true;
        } else {
          this.options[i].selected = false;
        }
      }
      this.$store.dispatch('addNoteType', option);
    },
    getNoteImg(id) {
      const images = require.context('../assets/', false, /\.png$/);
      return images(`./music_note_${id}.png`);
    },
  },
};
</script>

<style scoped>
.icons {
  height: 30px;
  width: 30px;
}

.selected {
  background-color: #6ab2fc;
}
</style>
