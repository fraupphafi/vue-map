import Vue from 'vue';
import store from './storage/store.js';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.config.devtools = true;

App.store = store;


new Vue({
  render: h => h(App),
}).$mount('#app');
