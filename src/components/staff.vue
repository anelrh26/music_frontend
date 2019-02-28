<template>
  <div class="staff" ref="staff"></div>
</template>

<script>
import Vex from "vexflow";

export default {
  name: "staff",
  data() {
    return {
      song: this.$store.state.song
    };
  },
  mounted() {
    const VF = Vex.Flow;

    // Create an SVG renderer and attach it to the DIV element named "boo".
    const div = this.$refs.staff;
    const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

    // Configure the rendering context.
    renderer.resize(600, 200);
    const context = renderer.getContext();
    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

    // Create a stave of width 400 at position 10, 40 on the canvas.
    const stave = new VF.Stave(10, 40, 4000);

    // Add a clef and time signature.
    stave.addClef("treble").addTimeSignature("4/4");

    // Redonta: W
    // Blanca: h
    // Negra: q
    // Corchea: 8
    // Semicorchea: 16

    // Connect it to the rendering context and draw!
    stave.setContext(context).draw();
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
