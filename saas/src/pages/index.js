import { createRoutes } from '@/utils/core';
import BasicLayout from '@/layouts/BasicLayout';
import UserLayout from '@/layouts/UserLayout';
import Page403 from './Pages/403';
import NotFound from './Pages/404';
import Page500 from './Pages/500';
import Coming from './Personal/Coming';
import Login from './Login';
import Register from './Register';
import AttendanceData from './Attendance/AttendanceData';
import SalaryStatements from './Attendance/SalaryStatements';
import Dashboard from './Dashboard';
import CRUD from './Business/CRUD';
import CRUDDetail from './Business/CRUD/routers/Detail';
import Archives from './Personal/Archives/index';
import Calendar from './Recruitment/Calendar/index';
import StudyPlatform from './Attendance/StudyPlatform/index';

/**
 * 主路由配置
 * 
 * path 路由地址
 * component 组件
 * indexRoute 默认显示路由
 * childRoutes 所有子路由
 * NotFound 路由要放到最下面，当所有路由当没匹配到时会进入这个页面
 */
const routesConfig = app => [
  {
    path: '/sign',
    title: '登录',
    indexRoute: '/sign/login',
    component: UserLayout,
    childRoutes: [
      Login(app),
      Register(app),
      NotFound()
    ]
  },
  {
    path: '/',
    title: '系统中心',
    component: BasicLayout,
    indexRoute: '/dashboard',
    childRoutes: [
    
      AttendanceData(app),
      SalaryStatements(app),
      Dashboard(app),
      CRUD(app),
      CRUDDetail(app),
      Archives(app),
      Calendar(app),
      StudyPlatform(app),
      Coming(),
      Page403(),
      Page500(),
      NotFound()
    ]
  }
];

export default app => createRoutes(app, routesConfig);
