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
    getPosts(_) {
      return axios.get("post/getRecent")
    },
    getArticle(_, postID) {
      // HUI
      console.log(postID)
      const sampleText = `### Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. Curabitur nec rhoncus sapien. Praesent posuere fringilla quam, et porta massa rutrum a. Maecenas tristique ex eu sapien euismod, vitae semper velit aliquam. Suspendisse vitae mi at purus suscipit ultrices et sed mi. Nunc quam arcu, sagittis et turpis nec, viverra lacinia sapien. Aliquam pellentesque eget felis quis luctus. Aliquam sed justo id nibh gravida sollicitudin. Integer fringilla risus a libero vestibulum molestie. Suspendisse potenti. Vivamus dignissim, nisl quis lobortis sodales, turpis nisi feugiat magna, id congue sapien arcu at ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis elit lacinia, vestibulum tortor at, varius orci. Phasellus eget turpis sed dolor finibus bibendum quis in mi.
**Nullam** aliquet elit elit, at luctus tortor faucibus quis. Fusce sit amet auctor dolor. Aliquam vel velit est. Nam semper ante justo, a posuere eros ultrices sit amet. Donec tincidunt neque ipsum, vel ornare velit pellentesque vel. Phasellus eu nisi ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ut luctus orci, vel sollicitudin lectus. Curabitur eget vehicula justo. Etiam at lacinia velit. Pellentesque varius, erat sit amet consequat rhoncus, tellus elit faucibus nunc, ac fermentum felis nisi in nulla. Donec lacus risus, ornare hendrerit lacinia at, dictum sit amet enim.
*Nam* consequat maximus nunc, quis sagittis nisi ultrices malesuada. Nulla fringilla ultrices felis, gravida suscipit felis lobortis vitae. Aliquam semper turpis ut arcu tempor, sed semper sapien tincidunt. Etiam aliquam, leo vitae euismod vulputate, nibh diam rutrum arcu, non dictum risus augue vel nisi. Ut molestie ante nunc. Mauris tincidunt pellentesque scelerisque. Fusce hendrerit pretium ante, pulvinar imperdiet lectus fringilla vitae. Aenean id hendrerit enim, sed ornare lacus. Suspendisse suscipit maximus felis at bibendum. Nam molestie ipsum eget velit faucibus, vel rhoncus ipsum imperdiet. Nulla vehicula erat nulla, sagittis pulvinar augue volutpat quis. Integer odio tortor, dictum a maximus id, viverra vitae nulla.
### Pellentesque sem ex, 
efficitur ut nibh a, sagittis imperdiet mi. Sed pulvinar dolor eros, id dapibus nibh ultrices non. Vivamus eu venenatis ipsum. Vestibulum ligula est, feugiat sit amet erat quis, pretium molestie turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque tempor felis non orci tempor feugiat. Quisque in ex dapibus, finibus augue et, egestas diam. Aenean facilisis blandit justo, vel consectetur felis dapibus dignissim. Suspendisse neque eros, volutpat id arcu eu, tempus facilisis enim. In mollis placerat lectus, et congue urna placerat et. Proin ac nisl a massa ornare tristique. Proin rhoncus tortor sit amet congue semper. Cras dignissim dui sit amet ipsum tempor, sed volutpat neque gravida.
~Suspendisse potenti.~ Fusce blandit mauris lorem, sed rutrum dui pellentesque a. Phasellus quis ipsum quis ligula imperdiet commodo. Nulla lorem velit, molestie eu elementum egestas, dapibus scelerisque urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam vitae felis nibh. Integer sed ultrices metus, at semper purus. Nullam commodo rhoncus aliquet.`
      return sampleText
    }
  },
  modules: {
  },
  plugins: [
    createPersistedState()
  ]
})
