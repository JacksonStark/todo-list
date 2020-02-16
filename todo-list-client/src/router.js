import Vue from 'vue'
import Router from 'vue-router'
import TodoList from './components/TodoList.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todos',
      component: TodoList
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})