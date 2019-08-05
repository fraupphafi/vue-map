import Vue from 'vue';

import router from './router.js';
import store from './storage/store.js';
import App from './App.vue';


Vue.config.productionTip = false;
Vue.config.devtools = true;

App.store = store;
App.router = router;

new Vue({
  render: h => h(App),
}).$mount('#app');
