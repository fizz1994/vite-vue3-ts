/**
 * @name AutoImportDeps
 * @description 按需加载，自动引入
 */

import AutoImport from 'unplugin-auto-import/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export const AutoImportDeps = () => {
  return AutoImport({
    resolvers: [
      // 自动导入 AntDesignVue 相关函数
      AntDesignVueResolver({
        importStyle: 'less'
      })
    ],
    imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
    dts: 'types/auto-imports.d.ts',
    eslintrc: {
      enabled: true,
      filepath: './.eslintrc-auto-import.json',
      globalsPropValue: true
    }
  });
};
