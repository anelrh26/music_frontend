<template>
  <div class="about">
    <el-main>
      <el-row :gutter="12">
        <el-col :span="4">
          <el-card :body-style="{ padding: '0px' }">
            <img src="@/assets/anel.jpg" class="image">
            <div style="padding: 14px;">
              <span>Anel Rojas</span>
              <div class="bottom clearfix">
                <p>Worked on the frontend</p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card :body-style="{ padding: '0px' }">
            <img src="@/assets/bruno.jpg" class="image">
            <div style="padding: 14px;">
              <span>Bruno Sanchez</span>
              <div class="bottom clearfix">
                <p>Worked on the frontend</p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card :body-style="{ padding: '0px' }">
            <img src="@/assets/daniel.jpg" class="image">
            <div style="padding: 14px;">
              <span>Jose Daniel Chaves</span>
              <div class="bottom clearfix">
                <p>Worked on the backend</p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card :body-style="{ padding: '0px' }">
            <img src="@/assets/its_a_me.jpg" class="image">
            <div style="padding: 14px;">
              <span>Gabriel Madriz</span>
              <div class="bottom clearfix">
                <p>Worked on the backend</p>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>


<style scoped>
.lastRow {
  margin-top: 40px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
    };
  },
};
</script>
