import { createRouter, createWebHistory } from 'vue-router';
import routes from './modules';
import { routerHook } from './hook';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default routerHook(router);
