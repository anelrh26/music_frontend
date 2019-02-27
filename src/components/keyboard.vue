<template>
  <div class="hello">
    <div class="keyboard">
      <ul>
        <li
          v-for="note in notes"
          :key="note.id"
          :class="{
                    key:true,
                    whiteKey:note.type === 1,
                    blackKey:note.type === 2,
                    chunche:note.accidental
                }"
        >
          <a></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'keyboard',
  props: {
    msg: String,
  },
  data() {
    return {
      notes: this.$store.state.notes,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.keyboard {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}
ul {
  display: flexbox;
}
li {
  margin: 0;
  padding: 0;
  float: left;
  position: relative;
}
.key {
  box-shadow: -1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset,
    0 0 3px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 5px 5px;
}
.whiteKey {
  width: 4em;
  height: 16em;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  z-index: 1;
}
.whiteKey:first-of-type {
  border-left: 1px solid black;
}
.whiteKey:active {
  border-top: 1px solid #777;
  border-bottom: 1px solid #999;
  box-shadow: 2px 0 3px rgba(0, 0, 0, 0.1) inset,
    -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2);
  background: linear-gradient(top, #fff 0%, #e9e9e9 100%);
}
.blackKey {
  background-color: black;
  width: 2em;
  height: 8em;
  z-index: 2;
  margin: 0 0 0 -1em;
  border: 1px solid #000;
  border-radius: 0 0 3px 3px;
  box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.2) inset,
    0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(0, 0, 0, 0.5);
  background: linear-gradient(45deg, #222 0%, #555 100%);
}
.blackKey:active {
  box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.2) inset,
    0 -2px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 1px 2px rgba(0, 0, 0, 0.5);
  background: linear-gradient(left, #444 0%, #222 100%);
}
.chunche {
  margin: 0 0 0 -1em;
}
ul li:first-child {
  border-radius: 5px 0 5px 5px;
}
ul li:last-child {
  border-radius: 0 5px 5px 5px;
}
</style>
