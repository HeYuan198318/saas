import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = app => ({
  path: '/studyPlatform',
  title: '公共学习平台',
  component: dynamicWrapper(app, [import('./model')], () => import('./components'))
});

export default app => createRoute(app, routesConfig);
