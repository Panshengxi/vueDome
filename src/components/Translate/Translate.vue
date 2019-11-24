<template>
  <div>
    <a @click="changeLang">{{$t('langs.switch')}}</a>
  </div>
</template>
<style scoped>
a {
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  padding-top: 10px;
  border-radius: 8px;
  background-color: #ff4d28;
  color: #f0f0f0;
  width: 100px;
  height: 40px;
}
</style>
<script>
export default {
  data() {
    return {
      lang: this.$cookie.getCookie("lang") || "zh-CN"
    };
  },
  methods: {
    changeLang() {
      this.$confirm(this.$t("confirm.isSwitch"), this.$t("confirm.tip"), {
        confirmButtonText: this.$t("confirm.confirm"),
        cancelButtonText: this.$t("confirm.cancel"),
        type: "warning"
      })
        .then(() => {
          this.lang === "zh-CN"? this.switchLang("en-US"): this.switchLang("zh-CN");
        })
        .catch(() => {
          // this.$cookie.removeCookie('lang')
        });
    },
    switchLang(lang) {

      this.lang = lang;
      this.$i18n.locale = this.lang; //关键语句
      this.$cookie.setCookieDefault("lang", this.lang, 10);
    }
  }
};
</script>
