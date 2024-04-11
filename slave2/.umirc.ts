import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  base: '/',
  layout: {
    title: 'xxxxxx子应用2',
  },
  routes: [
    {
      name: '首页',
      path: '/home1',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',
  qiankun: {
    slave: {},
  },
});
