<template>
  <div>
    <section class="player">
      <!-- logo -->
      <!-- 进度条 -->
      <el-progress :percentage="percentage" :color="customColor"></el-progress>
      <!-- 播放内容 -->

      <!-- 播放列表按钮 -->
      <span class="icon el-icon-s-fold"></span>
      <!-- 下一首 -->
      <span @click="playNext" class="icon el-icon-download"></span>
      <!-- 播放按钮 -->
      <span v-show="!isplay" @click="play" class="icon el-icon-video-play"></span>
      <span v-show="isplay" @click="pause" class="icon el-icon-video-pause"></span>
    </section>
    <section hidden class="playList">
      <audio
        @timeupdate="getPercent"
        @ended="playNext"
        ref="audio"
        class="fixed"
        controls="controls"
        autobuffer
      >
        <source ref="source" :src="source" type />
      </audio>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      percentage: 0,
      customColor: "#ff4d28",
      source: localStorage.source
        ? JSON.parse(localStorage.source).src
        : "/static/media/纯音乐 - 莫失莫忘 (桃公子).56a5ddc.mp3",
      isplay: false,
      playKey: localStorage.source
        ? JSON.parse(localStorage.source).playKey
        : 0,
      songList: [
        "/static/media/纯音乐 - 莫失莫忘 (桃公子).56a5ddc.mp3",
        "/static/media/纯音乐 - 亮剑插曲激情战歌 (纯音乐).0dc790b.mp3",
        "/static/media/K.Williams - 忧伤还是快乐.112c809.mp3"
      ]
    };
  },
  mounted() {
    this.setPercent();
  },
  methods: {
    play() {
      const audio = this.$refs.audio;
      audio.autoplay || (audio.autoplay = "autoplay");
      audio.paused ? audio.play() : ((this.percentage = 0), audio.load()); 
      this.isplay = true;
    },
    pause() { 
      this.$refs.audio.pause();
      this.isplay = false;
    },
    playNext() {
      this.playKey += 1;
      const source = this.$refs.source;
      this.playKey = this.playKey >= this.songList.length ? 0 : this.playKey;
      source.src = this.songList[this.playKey];
      this.play();
      this.$store.commit("setSource", {
        playKey: this.playKey,
        src: this.songList[this.playKey]
      });
    },
    getPercent($e) {
      const currentTime = $e.target.currentTime;
      const duration = $e.target.duration;
      const p = Math.round((currentTime / duration) * 100);
      if (/\d/.test(p)) {
        this.percentage = p;
      }
    },
    // 设置进度条控制音乐进度
    setPercent() {
      const dom = document.querySelector(".el-progress-bar");
      const outer = document.querySelector(".el-progress-bar__outer");
      const audio = this.$refs.audio;
      dom.addEventListener("click", e => {
        outer &&
          ((audio.currentTime = (e.x / outer.clientWidth) * audio.duration),
          this.pause(),
          this.play());
      });
    }
  },
  computed: {
    musicSource() {
      return this.$store.state.musicSource;
    }
  },
  watch: {
    musicSource(val) {
      this.$refs.source.src = val.src;
      this.playKey = val.playKey;
      this.play();
      localStorage.source = JSON.stringify({
        src: val.src,
        playKey: val.playKey
      });
    }
  }
};
</script>
<style scoped>
.player {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  height: 80px;
  background-color: #ffffff;
}
.el-icon-download {
  transform: rotate(-90deg);
}
.icon {
  font-size: 40px;
  float: right;
  margin-right: 20px;
  margin-top: 10px;
}
.icon:nth-of-type(1) {
  margin-right: 0;
}
</style>

