import { axiosRequestAdapter, axiosMockResponse } from '@alova/adapter-axios';
import { MockWrapper, createAlovaMockAdapter } from '@alova/mock';
import userMock from './user';

const mocks: MockWrapper[] = [userMock];

/**
 * 模拟数据请求适配器
 */
export default createAlovaMockAdapter(mocks, {
  // 指定axios请求适配器后，未匹配模拟接口的请求将使用这个适配器发送请求
  httpAdapter: axiosRequestAdapter(),
  delay: 1000,

  // axiosMockResponse中包含了onMockResponse和onMockError
  // 用于将模拟数据转换为AxiosResponse和AxiosError兼容的格式
  ...axiosMockResponse
});
