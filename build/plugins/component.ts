/**
 * @name  AutoRegistryComponents
 * @description 按需加载，自动引入组件
 */

import Components from 'unplugin-vue-components/vite';
import IconsResolver from 'unplugin-icons/resolver'; // icon相关
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export const AutoRegistryComponents = () => {
  return Components({
    // dirs: ['src/components', 'src/assents/icons'],
    // extensions: ['vue', 'svg'],
    resolvers: [
      // 自动导入 AntDesignVue 组件
      AntDesignVueResolver({ importStyle: 'less' }),
      // 自动注册图标组件
      IconsResolver({
        prefix: false,
        alias: { a: 'ant-design', c: 'custom' },
        customCollections: ['ant-design', 'custom']
      })
    ],
    dts: 'types/components.d.ts'
  });
};
