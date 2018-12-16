import Vue from 'vue'
import Router from 'vue-router'
import download from '@/components/download'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'download',
      component: download
    }
  ]
})
