// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';
import axios from "axios"
import VueJsonp from 'vue-jsonp'
// import Vuex from 'vuex'
import $ from 'jquery'
import store from './store/store.js'
Vue.prototype.$axios=axios
/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */
Vue.use(VueJsonp)
Vue.use(YDUI);
// Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
