import Mock from 'mockjs';
import { defineMock } from '@alova/mock';

export default defineMock({
  '[POST]/user/list': Mock.mock({
    code: 200,
    'data|1-10': [
      {
        'id|+1': 1,
        name: '@cname',
        'age|10-40': 10,
        'sex|+1': ['男', '女'],
        address: '@county(true)'
      }
    ]
  })
});
