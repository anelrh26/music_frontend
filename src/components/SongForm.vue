<template>
  <el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
    <el-form-item label="Name">
      <el-input v-model="formInline.name" placeholder="My Awesome Song"></el-input>
    </el-form-item>
    <el-form-item
      label="Tempo"
      :rules="[
      { type: 'number', message: 'Tempo must be a number'}
    ]"
    >
      <el-input type="tempo" v-model.number="formInline.tempo" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Save!</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        name: '',
        tempo: '',
      },
    };
  },
  methods: {
    onSubmit() {
      // this.$store.dispatch('addMetaData', this.formInline);
      console.log('coso', this.formInline);
      this.$store.dispatch('saveSong', this.formInline);
    },
  },
};
</script>

<style scoped>
form {
  margin-top: 50px;
}
</style>
