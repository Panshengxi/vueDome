import zh from '@/i18n/langs/zh'
import en from '@/i18n/langs/en'
const config = {
    locale: 'zh-CN',    // 语言标识
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
        'zh-CN': zh,   // 中文语言包
        'en-US': en    // 英文语言包
    },
    // silentTranslationWarn: true//去除警告
}


export default config;