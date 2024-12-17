import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import UserList from '../views/UserList.vue'; 
import UserDetail from '../views/UserDetail.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/usuarios', name: 'Users', component: UserList }, 
  { path: '/usuarios/:id', name: 'UserDetail', component: UserDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
