import { RouteRecordRaw } from 'vue-router';

const files = import.meta.glob('./**/*.ts', { eager: true });
const routes: RouteRecordRaw[] = [];

Object.keys(files).forEach(key => {
  if (key === './index.ts') return;

  const item = (files[key] as Record<string, RouteRecordRaw[]>).default;

  routes.push(...item);
});
export default routes;
