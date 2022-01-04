import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  namescaped: true,
  state: {
    currentUser: null,
    fatherFolder: "", //記錄父層資料夾id
    isAdmin: false,
    token: "", // 存放jwt token
    isLogin: false
  },
  mutations: {
      SET_AUTH(state, options){
        state.token = options.token
        state.isLogin = options.isLogin
      },
     SET_USER (state, user) {
        state.currentUser = user
      },
      SET_ADMIN (state, isAdmin) {
        state.isAdmin = isAdmin
      },
      setUserId(state, val) {
      state.userId = val;
      sessionStorage.setItem("fatherFolder", val);
    }
  },
  actions: {
    setAuth(context, options){
      context.commit('SET_AUTH', {
        token: options.token,
        isLogin: options.isLogin
      })
    },
    setUser (state, user) {
      state.commit('SET_USER', user)
    },
    setAdmin ({ commit }, isAdmin) {
      commit('SET_ADMIN', isAdmin)
    } 
  },
  getters: {
    currentUser: state => state.currentUser,
    isAdmin: state => state.isAdmin,
    fatherFolder(state) {
      return state.fatherFolder || sessionStorage.getItem("fatherFolder")
      // 如果state裡面的userId沒有值，改用一開始輸入帳號後存進sessionStorage的值
      // 解決vue 刷新後(重新整理 F5)數據會跟著刷掉的問題
    }
  },
  
  plugins: [createPersistedState({
    storage: window.localStorage,
    }
  )],


})
