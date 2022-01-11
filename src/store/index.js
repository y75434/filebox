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
    userId: null,
    nowFolderId: null
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
    SET_USERID(state, id){
      state.userId = id
    },
    SET_NOWFOLDERID(state, folderId){
      state.nowFolderId = folderId

    }
  },
  actions: {
    setAuth({ commit },isLogin){
      commit('SET_AUTH', isLogin)
    },
    setUser ({ commit }, user) {
      commit('SET_USER', user)
    },
    setUserId ({ commit }, id) {
      commit('SET_USERID', id)
    },
    setNowFolderId ({ commit }, nowFolder) {
      commit('SET_NOWFOLDERID', nowFolder)
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
    nowFolderId: state => state.nowFolderId

  },
  
  plugins: [createPersistedState({
    storage: window.localStorage,
    }
  )],


})
