import { alovaInst } from '../index';

/**
 * @description 获取用户列表
 * @param data {*}
 * @returns Promise
 */
export const getUserPageServ = (data: Record<string, any>) =>
  alovaInst.Post<Recordable[]>('/user/list', data);
