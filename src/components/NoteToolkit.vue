<template>
  <div class="note_toolkit">
    <el-button-group>
      <el-button type="primary" @click="onNoteOne">
        <img class="icons" src="@/assets/music_note_1.png">
      </el-button>
      <el-button type="primary" @click="onNoteTwo">
        <img class="icons" src="@/assets/music_note_2.png">
      </el-button>
      <el-button type="primary" @click="onNoteThree">
        <img class="icons" src="@/assets/music_note_3.png">
      </el-button>
      <el-button type="primary" @click="onNoteFour">
        <img class="icons" src="@/assets/music_note_4.png">
      </el-button>
      <el-button type="primary" @click="onNoteFive">
        <img class="icons" src="@/assets/music_note_5.png">
      </el-button>
    </el-button-group>
  </div>
</template>

<script>
export default {
  name: 'NoteToolkit',
  methods: {
    onNoteOne() {
      this.$store.dispatch('addNoteType', 'W');
    },
    onNoteTwo() {
      this.$store.dispatch('addNoteType', 'h');
    },
    onNoteThree() {
      this.$store.dispatch('addNoteType', 'q');
    },
    onNoteFour() {
      this.$store.dispatch('addNoteType', '8');
    },
    onNoteFive() {
      this.$store.dispatch('addNoteType', '16');
    },
  },
};
</script>

<style scoped>
.icons {
  height: 30px;
  width: 30px;
}
</style>
