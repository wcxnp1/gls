import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usemax: ''
  },
  getters: {
  },
  mutations: {
    setViewportWidth(state, newUsername) {
      console.log(newUsername, 'newUsername');
      state.usemax = newUsername;
    }
  },
  actions: {
  },
  modules: {
  }
})
