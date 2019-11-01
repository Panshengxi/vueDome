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
        token: ''
    },
    getters: {
        getToken(state) {
            return state.token
        }
    },
    mutations: {//用同步的方式，往仓库中存值
        /**
         * 参数1，是固定写法，将来获取state中的数据操作
         * 参数2，传进来，要存储到仓库里面的商品
         */
        setToken(state, token) {
            state.token = token;
        },
        changeNetwork(state,status){
            state.networkStatus = status
        }
    },
    actions: {
     
    }

})