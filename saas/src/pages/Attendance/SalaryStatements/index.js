import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = app => ({
  path: '/salaryStatements',
  title: '工资报表',
  component: dynamicWrapper(app, [import('./model')], () => import('./components'))
});

export default app => createRoute(app, routesConfig);
