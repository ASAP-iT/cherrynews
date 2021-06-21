import './plugins/axios'
import 'mdb-vue-ui-kit/css/mdb.min.css';

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

createApp(App).use(router).use(store).mount('#app')
