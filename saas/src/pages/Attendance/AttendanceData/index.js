import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = app => ({
  path: '/attendance',
  title: '考勤数据',
  component: dynamicWrapper(app, [import('./model')], () => import('./components'))
});

export default app => createRoute(app, routesConfig);
