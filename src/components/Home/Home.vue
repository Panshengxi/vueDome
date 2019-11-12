<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="我" name="first"></el-tab-pane>
      <el-tab-pane label="听" name="second">
        <Listen />
      </el-tab-pane>
      <el-tab-pane label="看" name="third">{{fullName}}</el-tab-pane>
      <el-tab-pane label="唱" name="fourth"></el-tab-pane>
    </el-tabs>
    <!-- 播放器 -->
    <Player />
    <div class="bottom"></div>
  </div>
</template>
<script>
import Listen from "@/components/Listen/Listen";
import Player from "@/components/Player/Player";
export default {
  data() {
    return {
      activeName: "second",
      firstName:'ni',
      lastName:'shi'
    };
  },
  computed: {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  },
  mounted() {},

  methods: {
    handleClick(tab, event) {
      if (tab.$children.length == 0) {
        this.$message("在开发中！");
      }
    }
  },

  components: {
    Listen,
    Player
  }
};
</script>
<style scoped>
.bottom {
  height: 80px;
}
</style>
