<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="我" name="first"></el-tab-pane>
      <el-tab-pane label="听" name="second">
        <Listen />
      </el-tab-pane>
      <el-tab-pane label="看" name="third"></el-tab-pane>
      <el-tab-pane label="唱" name="fourth"></el-tab-pane>
    </el-tabs>
    <!-- 播放器 -->
    <audio ref="audio" class="fixed" autoplay controls>
      <!-- <source ref="source" src="@/assets/music/纯音乐 - 莫失莫忘 (桃公子).mp3" type /> -->
    </audio>
  </div>
</template>
<script>
import Listen from "@/components/Listen/Listen";
export default {
  data() {
    return {
      activeName: "second"
    };
  },
  mounted() {},

  methods: {
    handleClick(tab, event) {
      if (tab.$children.length == 0) {
        this.$message("在开发中！");
      }
    }
  },
  computed: {
    musicSource() {
      return this.$store.state.musicSource;
    }
  },
  watch: {
    musicSource(val) {
      const html = '<source ref="source" src="' + val + '" type />';
      const audio = this.$refs.audio;
      audio.innerHTML = html;
      console.log(audio, "--------audio");
      audio.load();
      audio.addEventListener(
        "canplaythrough",
        function() {
          audio.paused && audio.play();
        },
        false
      );
    }
  },
  components: {
    Listen
  }
};
</script>
<style scoped>
.fixed {
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>
