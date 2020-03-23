import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '@/layout'
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true,
    meta: { title: '登陆' }
  }, {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  }, {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: '',
      name: 'Dashboard',
      component: () => import('@/views/index/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  }, {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]
const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router
