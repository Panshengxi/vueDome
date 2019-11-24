<template>
  <div>
    <ul class="list" v-cloak>
      <li @click="playMusic(b)" v-for="(b,idx) in songList" :key="idx">
        <div class="left float">
          <img :src="b.icon" alt />
        </div>
        <div class="right float">
          <h3 class="title">{{b.title | parseDec}}</h3>
          <p class="dec">{{b.dec | parseDec}}</p>
          <p>
            <span class="comments el-icon-chat-dot-round"></span>
            <span class="total">{{b.total}}</span>
            <span v-if="b.isMv" class="mv"></span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      songList: [
        {
          title: "莫失莫忘 (桃公子)",
          icon: "/static/img/music.7e1e289.jpg",
          src: "/static/media/纯音乐 - 莫失莫忘 (桃公子).56a5ddc.mp3",
          dec: "纯音乐",
          total: "7w",
          isMv: false,
          playKey: 0
        },
        {
          title: "亮剑插曲激情战歌",
          icon: "/static/img/music.7e1e289.jpg",
          src: "/static/media/纯音乐 - 亮剑插曲激情战歌 (纯音乐).0dc790b.mp3",
          dec: "纯音乐",
          total: "7w",
          isMv: false,
          playKey: 1
        },
        {
          title: "忧伤还是快乐",
          icon: "/static/img/music.7e1e289.jpg",
          src: "/static/media/K.Williams - 忧伤还是快乐.112c809.mp3",
          dec: "K.Williams",
          total: "7w",
          isMv: false,
          playKey: 2
        },
        {
          title: "Go Time",
          icon: "/static/img/music.7e1e289.jpg",
          src: "/static/media/Go Time.5980a88.mp3",
          dec: "Mark Petrie",
          total: "7w",
          isMv: false,
          playKey: 3
        },
        {
          title: "Frontier",
          icon: "/static/img/music.7e1e289.jpg",
          src: "/static/media/Frontier.a2cfff4.mp3",
          dec: "Doctor Vox",
          total: "7w",
          isMv: false,
          playKey: 4
        },
        {
          title: "Higher",
          icon: "/static/img/music.7e1e289.jpg",
          src: "/static/media/Higher.37ebb7f.mp3",
          dec: "Tobu",
          total: "7w",
          isMv: false,
          playKey: 5
        }
      ]
    };
  },
  filters: {
    parseDec(val) {
      if (val.length > 12) {
        val = val.replace(val.slice(12, val.length), "...");
      }
      return val;
    }
  },
  methods: {
    playMusic(val) {
      this.$store.commit("setSource", val);
    }
  }
};
</script>
<style scoped>
ul.list li {
  border-bottom: 1px solid #e0e0e0;
  overflow: hidden;
  padding-top: 20px;
}
ul.list li .float {
  float: left;
}
ul.list li .left {
  width: 50px;
  height: 50px;
  margin: 0 10px 0;
  border-radius: 8px;
  background-color: #ff4d28;
  overflow: hidden;
}
img {
  width: 50px;
  height: 50px;
}
ul.list li .right {
  text-align: left;
}
h3,
p,
ul {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}
[v-cloak] {
  display: none;
}

</style>
