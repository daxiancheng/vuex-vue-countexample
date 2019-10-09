import Vue from 'vue'
import Router from 'vue-router'
import counter from '@/components/counter.vue'
import index from '@/components/index.vue'
import countvuex from '@/components/countvuex.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/countervue',
      name: 'countervue',
      component: counter
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/countvuex',
      name: 'countvuex',
      component: countvuex
    }
  ]
})
