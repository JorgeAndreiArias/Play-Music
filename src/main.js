import Vue from 'vue'
import App from './App.vue'

import EventBus from './plugins/event-bus'

import './../node_modules/bulma/css/bulma.css';

Vue.use(EventBus);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
