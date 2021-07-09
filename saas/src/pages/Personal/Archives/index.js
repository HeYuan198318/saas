import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = app => ({
  path: '/personal/Archives',
  title: '动态人才档案',
  component: dynamicWrapper(app, [import('./model')], () => import('./components'))
});

export default app => createRoute(app, routesConfig);
