<template>
  <div>
    <section class="player">
      <!-- logo -->
      <!-- 进度条 -->
      <el-progress :percentage="percentage" :color="customColor"></el-progress>
      <!-- 播放内容 -->
      <div v-cloak class="player-content">
        <img :class="{'animate':isplay}" :src="playerInfo.icon" alt />
        <div class="content" v-cloak>
          <h3 class="title">{{playerInfo.title}}</h3>
          <p class="dec">{{playerInfo.dec}}</p>
        </div>
      </div>
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
      >
        <source ref="source" :src="playerInfo.src" type />
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

      songList: [
        {
          src: "/static/media/纯音乐 - 莫失莫忘 (桃公子).56a5ddc.mp3",
          title: "莫失莫忘 (桃公子)",
          dec: "纯音乐",
          playKey: 0,
          icon: "/static/img/music.7e1e289.jpg"
        },
        {
          src: "/static/media/纯音乐 - 亮剑插曲激情战歌 (纯音乐).0dc790b.mp3",
          title: "亮剑插曲激情战歌",
          dec: "纯音乐",
          playKey: 1,
          icon: "/static/img/music.7e1e289.jpg"
        },
        {
          src: "/static/media/K.Williams - 忧伤还是快乐.112c809.mp3",
          title: "忧伤还是快乐",
          dec: "K.Williams",
          playKey: 2,
          icon: "/static/img/music.7e1e289.jpg"
        },
        {
          src: "/static/media/Go Time.5980a88.mp3",
          title: "Go Time",
          dec: "Mark Petrie",
          playKey: 3,
          icon: "/static/img/music.7e1e289.jpg"
        },
        {
          src: "/static/media/Frontier.a2cfff4.mp3",
          title: "Frontier",
          dec: "Doctor Vox",
          playKey: 4,
          icon: "/static/img/music.7e1e289.jpg"
        },
        {
          src: "/static/media/Higher.37ebb7f.mp3",
          title: "Higher",
          dec: "Tobu",
          playKey: 5,
          icon: "/static/img/music.7e1e289.jpg"
        }
      ],
      playerInfo: {},
      isplay: false,
      playKey: 0
    };
  },
  mounted() {
    this.setPercent();
    this.playerInfo = localStorage.song
      ? JSON.parse(localStorage.song)
      : this.songList[0];
    this.playKey = this.playerInfo ? this.playerInfo.playKey : 0;
  },
  methods: {
    play(param) {
      const audio = this.$refs.audio;
      audio.autoplay || (audio.autoplay = "autoplay");
      param == "reload"
        ? ((this.percentage = 0), audio.load())
        : audio.paused
        ? (audio.play(), console.log(audio))
        : ((this.percentage = 0), audio.load());
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

      source.src = this.songList[this.playKey].src;
      this.$store.commit("setSource", this.songList[this.playKey]);
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
      this.playerInfo = val;
      this.play("reload");
      localStorage.song = JSON.stringify(val);
    }
  }
};
</script>
<style scoped>
[v-cloak] {
  display: none;
}
h3,
p {
  padding: 0;
  margin: 0;
}
.player {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  height: 80px;
  background-color: #ffffff;
}
.player-content {
  float: left;
}
.player-content .content {
  float: left;
  margin-left: 10px;
}
.player-content .content .title {
  font-size: 16px;
}
.player-content .content .dec {
  font-size: 14px;
}

.el-icon-download {
  transform: rotate(-90deg);
}
.player-content img {
  float: left;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ff4d28;
}
.player-content img.animate {
  animation: iconRotate 5s linear infinite;
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
@keyframes iconRotate {
  from {
    transform: rotate(0deg);
  }   
  to {
    transform: rotate(360deg);
  }
}
</style>

