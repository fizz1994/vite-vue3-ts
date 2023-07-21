import { UserConfig, ConfigEnv } from 'vite';
import { resolve } from 'path';
import { createVitePlugins } from './build/plugins';
import loadProxy from './build/proxy';
import createViteBuild from './build/build';

/**
 * 获取路径
 * @param dir
 * @returns
 */
const pathResolve = (dir: string) => {
  return resolve(process.cwd(), '.', dir);
};

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  return {
    // plugins
    plugins: createVitePlugins(),

    // resolve
    resolve: {
      alias: {
        '@': pathResolve('src')
      }
    },

    // css
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/vxe-table.scss" as *;`
        },
        less: {
          modifyVars: {
            hack: 'true; @import "@/assets/less/antd.less"'
          },
          javascriptEnabled: true,
          additionalData: `@import "@/assets/less/antd.less"; @import "@/assets/less/mixins.less";`
        }
      }
    },

    // 本地服务
    server: {
      https: false,
      host: true,
      port: 8000,
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      proxy: loadProxy({ mode } as ConfigEnv)
    },

    // 构建
    build: createViteBuild({ mode } as ConfigEnv)
  };
};
