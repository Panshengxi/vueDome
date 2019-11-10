// 1、引入 vue
import Vue from 'vue';
// 2、引入 vuex
import Vuex from 'vuex';
// 3、调用 Vuex
Vue.use(Vuex);
// 4.创建仓库的实例对象
export default new Vuex.Store({
    // 仓库的选项对象
    state: {//存储的数据结构
        token: '',
        setTokenTime:'',
        isExpired:false,
        musicSource:'/'
    },
    getters: {
        getToken(state) {
            return {
                token:state.token,
                setTokenTime:state.setTokenTime
            }
        },
        isExpired(state){
            return state.isExpired;
        }
    },
    mutations: {//用同步的方式，往仓库中存值
        /**
         * 参数1，是固定写法，将来获取state中的数据操作
         * 参数2，传进来，要存储到仓库里面的商品
         */
        setToken(state, o) {
            state.token = o.token;
            state.setTokenTime = o.setTokenTime;
        },
        changeNetwork(state,status){
            state.networkStatus = status
        },
        setExpired(state,flag){
            state.isExpired = flag;
        },
        setSource(state,val){
            state.musicSource = val;
            console.warn(state.musicSource);
            
        }
    },
    actions: {
     
    }

})