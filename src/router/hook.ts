import { Router } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({
  showSpinner: true,
  easing: 'ease',
  speed: 500,
  minimum: 0.3
});

/**
 * 路由hook
 * @param router
 * @returns
 */
export const routerHook = (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    NProgress.start();

    // 未登录
    if (!localStorage.getItem('token')) {
      if (to.meta.hasAuth && to.name !== 'Login') {
        next({ name: 'Login' });
      }
      next();
    } else {
      if (to.name === 'Login') {
        // 访问登录页跳转到主页
        next({ name: 'Index' });
      }
      next();
    }
  });

  router.afterEach(to => {
    NProgress.done();
    const title = useTitle();
    title.value = (to.meta.title ? to.meta.title : document.title) as string;
  });

  return router;
};
