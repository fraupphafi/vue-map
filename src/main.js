
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import "vuetify/dist/vuetify.min.css";
import '@mdi/font/css/materialdesignicons.css';

import router from './router.js';
import store from './storage/store.js';
import App from './App.vue';


Vue.use(Vuetify, { iconfont: "mdi" });

Vue.config.devtools = true;

App.store = store;
App.router = router;

new Vue({
  render: h => h(App),
}).$mount('#app');
