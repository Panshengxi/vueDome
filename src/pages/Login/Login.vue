<template>
  <div>
    <el-row>
      <el-button @click="register" type="primary">register</el-button>
      <el-button @click="login" type="success">login</el-button>
      <el-button @click="getUserInfo" type="success">getUserInfo</el-button>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    login() {
      this.$http
        .post(this.$type.info + "/user/login", {
          mobile: "abb",
          password: "666"
        })
        .then(res => {
          this.$store.commit("setToken", {
            token: res.data.data.ck,
            setTokenTime: new Date().getTime()
          });

          this.expiredSolve();
          this.$router.push({ path: "/Home" });
        });
    },
    register() {
      this.$http
        .post(this.$type.info + "/user/register", {
          mobile: "abb",
          password: "666"
        })
        .then(res => {
          console.log(res.data);
        });
    },
    getUserInfo() {
      this.$http.post(this.$type.info + "/user/getUserInfo", {}).then(res => {
        console.log(res.data);
      });
    },
    expiredSolve() {
      const timeId = setInterval(() => {
        const isExpired =
          new Date().getTime() - this.$store.getters.getToken.setTokenTime >
          1000 * 60 * 5;
        isExpired &&
          (this.$store.commit("setExpired", isExpired), clearInterval(timeId));
      }, 1000);
    }
  }
};
</script>