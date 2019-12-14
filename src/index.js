import Vue from 'vue'
import router from './router'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'

import 'assets/css/app.styl'
Vue.use(BootstrapVue)
const axiosConfig = { baseURL: 'https://git.heroku.com/evening-ocean-99245.git' }
Vue.prototype.$axios = axios.create(axiosConfig)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
