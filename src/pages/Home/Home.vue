<template>
  <div>
    <Translate/>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane :label="$t('Home.my')" name="first"></el-tab-pane>
      <el-tab-pane :label="$t('Home.listen')" name="second">
        <Listen />
      </el-tab-pane>
      <el-tab-pane :label="$t('Home.look')" name="third">
        <!-- <input type="file" accept="image/*" multiple />
        <input type="file" accept="audio/*" capture="microphone" /> -->
       
      </el-tab-pane>
      <el-tab-pane :label="$t('Home.sing')" name="fourth"></el-tab-pane>
    </el-tabs>
    <!-- 播放器 -->
    <Player />
    <div class="bottom"></div>
  </div>
</template>
<script>
import Listen from "@/components/Listen/Listen";
import Player from "@/components/Player/Player";
import Translate from "@/components/Translate/Translate";
export default { 
  data() {
    return {
      activeName: "second"
    };
  },
  computed: {},
  mounted() {
    console.log(this,'-------------this')
  },  

  methods: {
    handleClick(tab, event) {
      if (tab.$children.length == 0) {
        this.$message("在开发中！");
      }
    }
   
  },

  components: {
    Listen,
    Player,
    Translate
  }
};
</script>
<style scoped>
.bottom {
  height: 80px;
}
Translate {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
