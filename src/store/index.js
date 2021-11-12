import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  namescaped: true,
  state: {
    currentUser: null,
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
    isAdmin: state => state.isAdmin
  },
  plugins: [createPersistedState({
    storage: window.localStorage,
    }
  )],


})
