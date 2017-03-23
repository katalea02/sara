// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import footer from './components/footer'
import nav from './components/nav'
import test from './components/test'

Vue.component('test-tag', test)
Vue.component('nav-menu', nav)
Vue.component('footertag', footer)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
