<template>
  <div class="note_toolkit">
    <div v-for="item in items" :key="item.id">{{ item }}</div>
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
      alert('note one');
    },
    onNoteTwo() {
      alert('note two');
    },
    onNoteThree() {
      alert('note three');
    },
    onNoteFour() {
      alert('note four');
    },
    onNoteFive() {
      alert('note five');
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
