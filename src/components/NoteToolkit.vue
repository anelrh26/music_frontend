<template>
  <div class="note_toolkit">
    <el-button-group v-for="option in options" :key="option.id">
      <el-button type="primary" @click="onNoteClick(option.note)" :class="{ selected: option.selected }">
        <p>{{option.id}}</p>
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
        { selected: false, id: '1', note: 'w' },
        { selected: false, id: '2', note: 'h' },
        { selected: false, id: '3', note: 'q' },
        { selected: false, id: '4', note: '8' },
        { selected: false, id: '5', note: '16' },
      ],
    };
  },
  methods: {
    onNoteClick(note) {
      this.$store.dispatch('addNoteType', note);
    },
    getNoteImg(id) {
      let images = require.context('../assets/', false, /\.png$/)
      return images('./music_note_' + id + ".png")
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
