import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/peoples/Index'
import Manage from '@/views/peoples/Manage'
import EUTest from '@/views/ElementUiTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage
    },
    {
      path: '/Test',
      name: 'EUTest',
      component: EUTest
    }
  ]
})
