import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = app => ({
  path: '/Recruitment/Calender',
  title: '面试履历',
  component: dynamicWrapper(app, [import('./model')], () => import('./components'))
});

export default app => createRoute(app, routesConfig);
