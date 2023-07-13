/**
 * @name createVitePlugins
 * @description 封装plugins数组统一调用
 */

import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import Icons from 'unplugin-icons/vite'; // icon相关
import { AutoRegistryComponents } from './component';
import { AutoImportDeps } from './autoImport';
import { CreateStyleImport } from './createStyleImport';
import { ConfigCompressPlugin } from './compress';
import { LegacyPlugin } from './legacy';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';

export function createVitePlugins() {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // vue支持
    vue(),

    // setup语法糖组件名支持
    vueSetupExtend(),

    // 自动按需引入icon
    Icons({
      compiler: 'vue3',
      defaultStyle: 'width: 1em; height: 1em; line-height: 1; vertical-align: -0.125em;',
      autoInstall: true,
      customCollections: {
        custom: FileSystemIconLoader('./src/assets/icons', svg =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')
        )
      }
    }),

    // 自动按需引入组件
    AutoRegistryComponents(),

    // 自动按需引入依赖
    AutoImportDeps(),

    // 开启.gz压缩
    ConfigCompressPlugin(),

    // 自动按需引入样式
    CreateStyleImport(),

    // 浏览器兼容器
    LegacyPlugin()

    // svg
    // svgLoader({
    //   defaultImport: 'component'
    // })
  ];

  return vitePlugins;
}
