import { App } from 'vue';
import 'xe-utils';
import { VXETable, Column, Table, Tooltip, Icon, Grid, Colgroup } from 'vxe-table';

import zhCN from 'vxe-table/es/locale/lang/zh-CN';
import XEUtils from 'xe-utils';

// 按需加载的方式默认是不带国际化的，自定义国际化需要自行解析占位符 '{0}'
VXETable.setup({
  zIndex: 4000,
  i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCN, key), args)
});

/**
 * @description 注册table组件
 * @param app
 * @returns
 */
const useTable: (app: App) => App = app => {
  app.use(Column).use(Table).use(Tooltip).use(Icon).use(Grid).use(Colgroup);
  return app;
};

export default useTable;
