import Counter from './component/Counter/index.js'

const routes = [
  { path: '/', component: Counter }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

export default router;
