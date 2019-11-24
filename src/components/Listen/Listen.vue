<template>
  <div>
    <!-- 走马灯 -->
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 2" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <!-- 导航栏 -->
    <el-row>
      <el-col :span="8" v-for="(b, idx) in navMenuList" :key="idx">
        <ul>
          <li>
            <el-button
              :type="b.type"
              class="icon"
              :class="{'el-icon-arrow-up':b.class=='el-icon-arrow-up',
                'el-icon-service':b.class=='el-icon-service','el-icon-collection':b.class=='el-icon-collection',
                'el-icon-s-data':b.class=='el-icon-s-data','el-icon-attract':b.class=='el-icon-attract'}"
            ></el-button>
            <div style="padding: 14px;">
              <span>{{$t(b.title)}}</span>
            </div>
          </li>
        </ul>
      </el-col>
    </el-row>
    <!-- 列表 -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="新歌" name="first">
        <Songlist />
      </el-tab-pane>
      <el-tab-pane label="直播" name="second">直播</el-tab-pane>
      <el-tab-pane label="歌单" name="third">歌单</el-tab-pane>
      <el-tab-pane label="视频" name="fourth">视频</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Songlist from "./Songlist";
export default {
  data() {
    return {
      activeName: "first",
      navMenuList: [
        {
          title: 'Home.musicLibrary',
          class: "el-icon-service",
          type: "primary"
        },
        { title: "Home.songMenu", class: "el-icon-service", type: "success" },
        { title: "Home.radio", class: "el-icon-s-data", type: "primary" },
        { title: "Home.guessYoulike", class: "el-icon-attract", type: "warning" },
        { title: "Home.recommendedDaily", class: "el-icon-collection", type: "danger" }
        // { title: "收起", class: "el-icon-arrow-up", type: "info" }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      //   console.log(tab, event);
      if (tab.$children.length == 0) {
        this.$message("在开发中！");
      }
    }
  },
  components: {
    Songlist
  }
};
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-card__body {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.el-row {
  padding-top: 20px;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
ul .icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 30px;
  padding-left: 13px;
  color: #ffffff;
}
</style>
