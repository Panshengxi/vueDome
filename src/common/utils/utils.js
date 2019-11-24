const Event = {
    addHandler(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    }
};
const Cookie = {
    setCookie(key, val, params) {
        let cookie = key + '=' + val + ';';
        for (let p in params) {
            cookie = cookie + p + '=' + params[p] + ';';
        }
        document.cookie = cookie;
    },
    getCookie(name) {
        let arr, reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
        if (arr = document.cookie.match(reg)) {
            return arr[2];
        }
        else
            return '';
    },
    setCookieDefault(key, val, min) {
        this.setCookie(key, val, {
            path: '/',
            domain: 'localhost',
            'expires': new Date(new Date().getTime() + min * 60 * 1000).toUTCString()
        });
    },
    removeCookie(key) {
        this.setCookie(key, "", -1);//把cookie设置为过期
    }
}
export default Vue => {
    Object.defineProperty(Vue.prototype, '$cookie', { value: Cookie });
    Object.defineProperty(Vue.prototype, '$event', { value: Event });
};