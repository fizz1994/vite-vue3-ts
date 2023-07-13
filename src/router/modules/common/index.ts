export default [
  {
    path: '',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        meta: {
          hasAuth: false
        },
        component: () => import('@/views/home/index.vue')
      },
      {
        path: 'example',
        name: 'Example',
        meta: {
          hasAuth: false
        },
        component: () => import('@/views/example/index.vue')
      }
    ]
  }
];
