import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import routes from './routes'

import EventBus from './plugins/event-bus'

import './../node_modules/bulma/css/bulma.css';
import msToMm from './filters/ms-to-mm'
import blur from './directives/blur'
Vue.use(blur)
Vue.use(VueRouter)
Vue.use(msToMm)
Vue.use(EventBus)

Vue.config.productionTip = false

const router = new VueRouter({ routes, mode: 'history' })

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
