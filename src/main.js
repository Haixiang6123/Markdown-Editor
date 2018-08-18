import Vue from 'vue'
import App from './App.vue'

import './assets/css/markdown.css';
import './assets/css/main.css';

import Highlight from './plugins/Highlight';

Vue.config.productionTip = false;

Vue.use(Highlight);

new Vue({
  render: h => h(App)
}).$mount('#app');
