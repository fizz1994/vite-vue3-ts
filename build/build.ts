/**
 * @name build
 * @description 生产配置
 */

import { BuildOptions, ConfigEnv } from 'vite';

const createViteBuild = ({ mode }: ConfigEnv) => {
  const build: BuildOptions = {
    target: 'es2015',
    minify: 'terser',
    chunkSizeWarningLimit: 500,
    cssCodeSplit: true, // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
    reportCompressedSize: false,

    rollupOptions: {
      output: {
        manualChunks: {
          // 拆分代码，这个就是分包，配置完后自动按需加载
          vue: ['vue']
        }
      }
    }
  };

  if (mode !== 'dev') {
    Object.assign(build, {
      terserOptions: {
        compress: {
          // warnings: false,
          drop_console: true, //打包时删除console
          drop_debugger: true, //打包时删除 debugger
          pure_funcs: ['console.log']
        },
        output: {
          comments: true // 去掉注释内容
        }
      }
    });
  }

  return build;
};

export default createViteBuild;
