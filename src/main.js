import Vue from 'vue'
import App from './App.vue'
import Util from '@/assets/js/util'

Vue.prototype.Util = Util

new Vue({
  el: '#app',
  render: h => h(App)
})
