import { createAlova } from 'alova';
import VueHook from 'alova/vue';
import { axiosRequestAdapter } from '@alova/adapter-axios';
import mockAdapter from './mock/index';
import { message } from 'ant-design-vue';

export const alovaInst = createAlova({
  // 请求的根路径, 一般设置为域名
  baseURL: '',

  // 用于确定在 use hook（例如 useRequest）应该如何返回状态化数据
  statesHook: VueHook,

  // 请求适配器，请求适配器将用于所有请求的发送，请求发送模块和具体的请求信息是解耦的
  requestAdapter: import.meta.env.MODE === 'development' ? mockAdapter : axiosRequestAdapter(),

  // 请求超时时间，单位为毫秒，默认为0，表示永不超时
  timeout: 60000,

  // 全局请求拦截器, 函数参数为一个method实例
  beforeRequest(method) {
    if (!method.meta?.ignoreToken) {
      method.config.headers.token = 'token';
    }
  },
  // 全局响应拦截器
  responded: {
    onSuccess: async response => {
      window.console.log(response);
      // 实例响应成功拦截
      //   loading.close();
      if (response.status === 200) {
        //后端自定义成功状态
        if (response.data?.code === 401) {
          message.error(response.data.errorMessage || response.data.msg || '登录失效，请重新登录');
          // const userStore = useUserStore();
          // userStore.logout();

          return Promise.reject(response.data);
        } else if (response.data?.code !== 200) {
          message.error(
            response.data.errorMessage || response.data.msg || '请求出现未知错误，请稍后重试'
          );
          return Promise.reject(response.data);
        } else {
          return response.data?.data;
        }
      } else {
        return Promise.reject(response);
      }
    },

    // 请求失败的拦截器
    // 请求错误时将会进入该拦截器。
    // 第二个参数为当前请求的method实例，你可以用它同步请求前后的配置信息
    onError: err => {
      window.console.log(err);
      // 实例响应失败拦截器
      if (err.response.status) {
        switch (err.response.status) {
          //404 资源不存在
          case 404:
            message.error('网络请求不存在');
            break;
          default:
            message.error(err.response.data.errorMessage || '请求出现未知错误，请稍后重试');
        }
        return Promise.reject(err.response);
      }
      return err;
    }
  }
});
