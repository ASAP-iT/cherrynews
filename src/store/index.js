import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'

axios.defaults.baseURL = "https://cherry.asap-it.tech/api/v1/"
axios.defaults.withCredentials = true

export default createStore({
  state: {
      accessToken: null
  },
  mutations: {
    setToken(state, token) {
      state.accessToken = token;
    },
  },
  actions: {
    register(_, payload) {
      return axios.post("register", payload)
    },
    login(_, payload) {
      return axios.post("login", payload)
    },
    save(_, payload) {
      return axios.post("user/update", payload)
    },
    getPost(_, postID) {
      return axios.get("post/get/" + String(postID))
    },
    getPosts(_) {
      return axios.get("post/getRecent")
    }
  },
  modules: {
  },
  plugins: [
    createPersistedState()
  ]
})
