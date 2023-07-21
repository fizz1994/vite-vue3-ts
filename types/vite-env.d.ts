/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />
/// <reference types="vite-svg-loader" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'nprogress';

declare module 'mockjs';

interface ImportMetaEnv {
  readonly VITE_PROXY: string;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
