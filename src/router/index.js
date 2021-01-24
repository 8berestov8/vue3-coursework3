import {createRouter, createWebHistory} from 'vue-router'
import Tasks from '../views/Tasks.vue'
import Task from '../views/Task'
import New from '../views/New.vue'


export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/home', component: Tasks, alias: '/'},
    {path: '/task/:id', component: Task},
    {path: '/new', component: New},
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

