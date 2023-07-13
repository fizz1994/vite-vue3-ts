/**
 * @name ConfigCompressPlugin
 * @description 浏览器兼容性
 */

import legacy from '@vitejs/plugin-legacy';

export const LegacyPlugin = () => {
  return legacy({
    targets: ['Chrome 51'],
    additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    renderLegacyChunks: false,
    modernPolyfills: true
  });
};
