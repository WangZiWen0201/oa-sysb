import Vue from 'vue'
export const USER_SIGNIN = 'USER_SIGNIN'
export const USER_SIGNOUT = 'USER_SIGNOUT'
export const USER_INFO = 'USER_INFO'
export const CHECKED_STATUS = 'CHECKED_STATUS'

export default {
  state: JSON.parse(sessionStorage.getItem('user')) || {},
  mutations: {
    [USER_SIGNIN] (state, user) {
      Object.assign(state, user)
    },
    [USER_INFO] (state, user) {
      Object.assign(state, user)
    },
    [CHECKED_STATUS] (state, user) {
      state.CHECKED_STATUS = user
    },
    [USER_SIGNOUT] (state) {
      Object.keys(state).forEach(k => Vue.delete(state, k))
    }
  },
  actions: {
    [USER_SIGNIN] ({commit}, user) {
      commit(USER_SIGNIN, user)
    },
    [USER_INFO] ({commit}, user) {
      commit(USER_INFO, user)
    },
    [CHECKED_STATUS] ({commit}, user) {
      commit(CHECKED_STATUS, user)
    },
    [USER_SIGNOUT] ({commit}) {
      commit(USER_SIGNOUT)
    }
  }
}
