<template>
  <el-table
    stripe
    empty-text="No Songs"
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 420px"
  >
    <el-table-column label="Creation Date" width="120">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 5px">{{ scope.row.creation_date }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Song">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>Name: {{ scope.row.name }}</p>
          <p>Tempo: {{ scope.row.tempo }}</p>
          <p>Time signature: {{ scope.row.time_signature }}</p>
          <div slot="reference" class="name-wrapper">
            <p>{{ scope.row.name }}</p>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column align="right" width="160">
      <template slot="header" slot-scope="scope">
        <el-input v-model="search" size="mini" placeholder="Type to search"/>
      </template>
      <template slot-scope="scope">
        <el-button type="primary" icon="el-icon-caret-right" circle @click="playSong(scope.row.id)"></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'songs',
  data() {
    return {
      search: '',
    };
  },
  computed: {
    tableData: {
      get() {
        return this.$store.state.songs;
      },
    },
  },
  methods: {
    playSong(id) {
      window.open(`http://localhost:3000/songs/${id}/download`, '_blank');
      return true;
    },
  },
};
</script>

<style scoped>
aside {
  width: auto;
}
</style>
