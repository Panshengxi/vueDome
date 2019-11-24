import zh from '@/i18n/langs/zh'
import en from '@/i18n/langs/en'
import Vue from 'vue'
import VueI18n from './vueI18n'
import utils from '@/common/utils/utils'//自己封装的工具类
const config = {
    locale: 'zh-CN',    // 语言标识
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
        'zh-CN': zh,   // 中文语言包
        'en-US': en    // 英文语言包
    },
    // silentTranslationWarn: true//去除警告
}
Vue.use(VueI18n)
Vue.use(utils)
config.locale = Vue.prototype.$cookie.getCookie("lang") || "zh-CN"//获取cookie中i18n语言key值，默认中文

export default new VueI18n(config);