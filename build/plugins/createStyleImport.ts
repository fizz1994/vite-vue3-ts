/**
 * @name  CreateStyleImport
 * @description 按需加载，自动引入样式
 */

import {
  createStyleImportPlugin,
  AndDesignVueResolve,
  VxeTableResolve
} from 'vite-plugin-style-import'; // 自动导入样式

export const CreateStyleImport = () => {
  return createStyleImportPlugin({
    resolves: [AndDesignVueResolve(), VxeTableResolve()]
  });
};
