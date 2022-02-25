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
    nowFolderId: null, 
    nowFile: null,
    group: null

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
    },
  
    NOWFILE(state, nowFile){
      state.nowFile = nowFile
    },
    SET_GROUP(state, group){
      state.group = group
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
    },
  
    nowFile ({ commit }, nowFile) {
      commit('NOWFILE', nowFile)
    } ,
    setGroup ({ commit }, group) {
      commit('SET_GROUP', group)
    },
      
  },
  getters: {
    currentUser: state => state.currentUser,
    isAdmin: state => state.isAdmin,
    isLogin: state => state.isLogin,
    userId: state => state.userId,
    nowFolderId: state => state.nowFolderId,
    nowFile: state => state.nowFile,
    group: state => state.group,

  },
  
  plugins: [createPersistedState({
    storage: window.localStorage,
    }
  )],


})
