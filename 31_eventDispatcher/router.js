import Counter from './component/Counter/index.js'
import Calculator from './component/Calculator/index.js'
import TodoList from './component/TodoList/index.js'

const routes = [
  { path: '/', component: Counter },
  { path: '/calculator', component: Calculator },
  { path: '/todo_list', component: TodoList }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

export default router;
