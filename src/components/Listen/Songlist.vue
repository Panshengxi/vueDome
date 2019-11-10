<template>
  <div>
    <ul class="list" v-cloak>
      <li @click="playMusic(b.source)" v-for="(b,idx) in songList" :key="idx">
        <div class="left float">
          <img :src="b.url" alt />
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
          title: "纯音乐 - 莫失莫忘 (桃公子)",
          url: "/",
          source: "/static/media/纯音乐 - 莫失莫忘 (桃公子).56a5ddc.mp3",
          dec:
            "这是一个寂寞的天,下着有些伤心的雨，别有幽尤暗恨生，此时无声胜有声，同是天涯沦落人，相逢何必相识",
          total: "7w",
          isMv: false
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
    playMusic(source) {
      this.$store.commit('setSource',source);
    }
  }
};
</script>
<style scoped>
ul.list li {
  border-bottom: 1px solid #e0e0e0;
  overflow: hidden;
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
