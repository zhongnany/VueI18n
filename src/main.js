// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './lang'

Vue.config.productionTip = false;


new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
