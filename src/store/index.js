import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'test store',
    ip: '',
  },
  getters: {
    getName(state) {
      return 'hello ' + state.name
    },
    getIp(state) {
      return state.ip
    },
  },

  // setter
  mutations: {
    mutationSetName(state, name) {
      state.name = name
    },
    mutationSetIp(state, ip) {
      state.ip = ip
    },
  },
  actions: {
    actionSetName(context, name){
      setTimeout(() => {
        context.commit('mutationSetName', name)
      }, 1000);
    }
  },
  modules: {},
})
