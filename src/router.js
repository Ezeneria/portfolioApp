import Vue from 'vue'
import Router from 'vue-router'

import About from './views/page/About.vue'
import Home from './views/page/Home'
import Our from './views/page/Our'
import Contacts from './views/page/Contacts'
// import appHeader from './views/appHeader/index'
// import appContent from './views/app-content/index'
// import appFooter from './views/appFooter/index'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/our', name: 'our', component: Our },
    { path: '/contacts', name: 'contacts', component: Contacts }
  ]
})
