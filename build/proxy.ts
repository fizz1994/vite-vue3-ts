/**
 * @name proxy
 * @description 代理配置
 */

import { ProxyOptions, ConfigEnv, loadEnv } from 'vite';

type ProxyTargets = Record<string, ProxyOptions>;

// 加载代理
const loadProxy = ({ mode }: ConfigEnv): ProxyTargets => {
  const root = process.cwd(); // 获取项目根路径
  const env = loadEnv(mode, root); // 获取vite的配置信息
  const { VITE_BASE_API, VITE_BASE_PROXY } = env;

  return {
    [VITE_BASE_API]: {
      target: VITE_BASE_PROXY,
      changeOrigin: true,
      ws: true
    }
  };
};

export default loadProxy;
