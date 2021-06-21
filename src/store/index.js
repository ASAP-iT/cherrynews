import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// import axios from 'axios'

// axios.defaults.baseURL = "https://cherry.asap-it.tech/api/"
// axios.defaults.withCredentials = true

export default createStore({
  state: {
      accessToken: null
  },
  mutations: {
    setToken(state, token) {
      state.accessToken = token;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersistedState()
  ]
})
