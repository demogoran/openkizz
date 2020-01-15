import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router'
import App from './App.vue'
import Editor from './Editor.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/content*', component: App },
    { path: '/editor', component: Editor }
  ],
  mode: 'history'
})



new Vue({
  router,
}).$mount('#app')
