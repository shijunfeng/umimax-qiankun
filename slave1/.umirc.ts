import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  base: '/',
  layout: {
    title: 'xxxxxx子应用',
  },
  routes: [
    {
      path: '/',
      redirect: '/home2',
    },
    {
      name: '首页',
      path: '/home2',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access2',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/aaaa',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',
  qiankun: {
    slave: {},
  },
});
