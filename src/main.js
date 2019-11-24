// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import http from './common/http'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import VueI18n from 'vue-i18n'
import VueI18n from '@/i18n/vueI18n' ;
import config from '@/i18n/config'
import utils from '@/common/utils/utils'

Vue.use(http);
Vue.use(VueI18n) // 通过插件的形式挂载
Vue.use(utils)

config.locale = Vue.prototype.$cookie.getCookie("lang") || "zh-CN"
const i18n = new VueI18n(config)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})