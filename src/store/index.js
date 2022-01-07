import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  namescaped: true,
  state: {
    currentUser: null,
    isAdmin: false,
    // token: "", // 存放jwt token
    isLogin: false,
    userId: null
  },
  mutations: {
    SET_AUTH(state, isLogin){
      // state.token = options.token
      state.isLogin = isLogin
    },
    SET_USER (state, user) {
      state.currentUser = user
    },
    SET_ADMIN (state, isAdmin) {
      state.isAdmin = isAdmin
    },
    SET_USERID(state, userId){
      state.userId = userId
    }
  },
  actions: {
    setAuth(state,isLogin){
      state.commit('SET_AUTH', isLogin)
    },
    setUser (state, user) {
      state.commit('SET_USER', user)
    },
    setUserId (state, userId) {
      state.commit('SET_USERID', userId)
    },
    setAdmin ({ commit }, isAdmin) {
      commit('SET_ADMIN', isAdmin)
    } 
  },
  getters: {
    currentUser: state => state.currentUser,
    isAdmin: state => state.isAdmin,
    isLogin: state => state.isLogin,
    userId: state => state.userId,


  },
  
  plugins: [createPersistedState({
    storage: window.localStorage,
    }
  )],


})
