// 1、配置信息
function Config(opt) {
    this.locale = opt.locale;
    this.messages = opt.messages;
}
//2、翻译目标函数_t
Config.prototype = {
    constructor: Config,
    _t: function _t(key, locale, messages) {
        let o = messages[locale], arr = key.split('.');
        for (let p in arr) {
            o = o[arr[p]];
        }
        return o;
    }
}
// 3、国际化VueI18n主函数
let _Vue;
let VueI18n = function VueI18n(options) {
    if (options === void 0) options = {};
    this.proxy = new Config(options);
    this.init(_Vue);
}
VueI18n.prototype = {
    constructor: VueI18n,
    init(Vue) {
        Vue.prototype.$i18n = this.proxy;
        Vue.prototype.$t = function (key) {
            let i18n = this.$i18n;
            return i18n._t(key, i18n.locale, i18n.messages)
        };
        new Vue({ data: this.proxy });//初始化Vue实例监听i18n属性
    }
}
VueI18n.install = function (Vue) {
    !this.installed && (this.installed = true, _Vue = Vue)
    return;
};
export default VueI18n;