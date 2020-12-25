import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Toasted from 'vue-toasted';
//import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(Toasted)

new Vue({
  store,
  //vuetify,
  render: h => h(App)
}).$mount('#app')
