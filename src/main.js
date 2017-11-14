// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as axios from 'axios'
import Vuetify from 'vuetify'
import '../node_modules/vuetify/src/stylus/main.styl'

Vue.config.productionTip = false

window.Vue = require('vue')

window.axios = axios
Vue.prototype.$http = axios

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
