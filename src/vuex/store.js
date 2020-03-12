// 引入Vue
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

// 注册vue
Vue.use(Vuex);

// 状态
const state = {
  userinfo: JSON.parse(localStorage.getItem('userinfo')),
  userList: [],
};
// mutations   用来改变，操作state(全局)
const mutations = {
  // 保存用户数据
  SAVE_USERINFO(state, userinfo) {
    // 先把数据存入本地存储
    localStorage.setItem('userinfo', JSON.stringify(userinfo));
    // 再更新数据
    state.userinfo = userinfo;
  },
  // 获取全局的用户数据
  GET_USERLIST(state, userlist) {
    state.userList = userlist;
  },
};
// 定义actions 异步的，主要是commit mutations 由mutation来改变状态
const actions = {
  GET_USERLIST({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/getuserlist').then((response) => {
        commit('GET_USERLIST', response.data);
        resolve();
      });
    });
  },
};

// 定义一个全局的共享属性
const getters = {
  vipUsers: state => state.userList.filter((v) => v.age > 25),
};
// 创建store仓库暴露出去
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
