// 运行时配置

import { MicroApp } from '@umijs/max';
// import { MicroAppRouteMode } from './.umi/plugin-qiankun-master/constants';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
  };
};
export function onRouteChange({
  location,
  clientRoutes,
  routes,
  action,
  basename,
  isFirst,
}) {
  
}
export function patchClientRoutes({ routes }: any) {
  routes[0].children.forEach((item: any, index: number) => {
    if (item.microApp) {
      item.path = '/' + item.microApp + item.path;
   
      const componentProps1 = {
        name: item.microApp,
        // history: 'browser',
        base: '/' + item.microApp,
      };
      routes[0].children[index].element = <MicroApp {...componentProps1} />;
  
    }
  });
}

export const qiankun = {
  lifeCycles: {
    // 所有子应用在挂载完成时，打印 props 信息
    async afterMount(props: any) {
      console.log('子应用在挂载完成时', props);
    },
  },
  fetch: async (url: string, ...args: any) => {
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
  },
};
