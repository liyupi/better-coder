import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vant from 'vant'
import 'vant/lib/index.css'
import Index from "./pages/Index"

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vant)

const routes = [
  {path: '/', component: Index},
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
