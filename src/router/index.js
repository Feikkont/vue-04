import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardViews from '../views/DashboardView.vue'
// import AddPayment from '../components/AddPayment.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add/payment/:category',
    name: 'add',
    component: DashboardViews
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardViews
  },
  {
    path: '/dashboard/page/:page',
    name: 'dashboard',
    component: DashboardViews
  },
  {
    path: '/about*',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '*',
    component: HomeView
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
