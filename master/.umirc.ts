import { defineConfig } from '@umijs/max';

export async function customFetch(url: string, ...args: any) {
  //  拦截子应用加载资源失败的情况处理
  try {
    return await window.fetch(url, ...args);
  } catch (e) {
    // history.push('/404', {message: '微应用加载失败，请检查应用是否可运行'})
  }
  return {
    async text() {
      return '';
    },
  };
}
// 初始化 state

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},

  proxy: {
    '/api': {
      target: 'http://jsonplaceholder.typicode.com/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  layout: {
    title: '主应用',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
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
    {
      name: '子应用home',
      path: '/aaaa',
      microApp: 'myslave1',
    },
    {
      name: '子应用home1',
      path: '/home2',
      microApp: 'myslave1',
    },
    {
      name: '子应用home2',
      path: '/home1',
      microApp: 'myslave2',
    },

    // {
    //   name: 'myslave2',
    //   path: '/myslave2',
    //   routes: [
    //     {
    //       name: 'ddddd',
    //       path: '/myslave2/home1',
    //       microApp: 'myslave2',
    //     },
    //   ],
    // },
  ],
  npmClient: 'pnpm',
  qiankun: {
    master: {
      apps: [
        {
          name: 'myslave1',
          entry: '//localhost:8001',
        },
        {
          name: 'myslave2',
          entry: '//localhost:8002',
        },
      ],
      fetch: customFetch,
    },
  },
});
