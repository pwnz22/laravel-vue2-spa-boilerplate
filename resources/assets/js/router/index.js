import Vue from 'vue'
import Router from 'vue-router'
import { routes as routes } from '../app/index'

console.log('all routes', routes)
Vue.use(Router)

const router = new Router({
    routes
})

// registering beforeEach hook

export default router