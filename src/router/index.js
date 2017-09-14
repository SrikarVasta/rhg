import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import goodbye from '@/components/goodbye'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/bye',
      name: 'goodbye',
      component: goodbye
    }
  ]
})
