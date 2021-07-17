/**
 * 模拟请求数据
 * @param {FetchMock} fetchMock 当现有条件不满足时，可以使用fetchMock来进行扩展
 * @param {function} delay 增加延迟时间 ms 例: delay(mockData) 或 delay(mockData, 200)
 * @param {function} mock 使用mock生成数据，例:

   mock({
     'string|1-10': '★' // 生成最少1颗，最多10颗星字符
   })

   // {'string': '★★★★★★'} 

  更多用法参考 http://mockjs.com/examples.html
 */
export default ({fetchMock, delay, mock, toSuccess, toError}) => {
  // 如果现有扩展不满足需求，可以直接使用fetchMock方法
  // fetchMock.mock(/httpbin.org\/post/, {/* response */}, {/* options */});

  return {
    '/api/user/login': (options) => {
      if (options.body) {
        const user = JSON.parse(options.body);
        if (user.userName === 'admin' && user.password === 'admin') {
          return toSuccess(mock({
            'userName': 'admin',                // 用户名
            'name': '@cname',                   // 中文名称
            'age|1-100': 100,                   // 100以内随机整数
            'birthday': '@date("yyyy-MM-dd")',  // 日期
            'city': '@city(true)',              // 中国城市
            'phone': /^1[385][1-9]\d{8}/,       // 手机号
            'token': '@guid'                    // token
          }), 400);
        } else {
          return toError('用户名或密码错误 admin/admin');
        }
      } else {
        return toError('请输入用户名和密码');
      }
    },
    '/api/user/register': options => toSuccess(),
    '/api/user/menu': options => toSuccess([
      {
        name: '仪表盘',
        icon: 'DashboardOutlined',
        path: '/dashboard',
      },
      {
        name: '人才库管理',
        icon: 'DesktopOutlined',
        path: '/dashboard',
        children: [
          {
            name: '人才库概览',
            path: '/dashboard',
          },
          
          {
            name: '简历标签',
            path: '/dashboard/ResumeLable',        
          },
          {
            name: '人才列表',
            path: '/dashboard/PersonnelList',        
          },
        ],
      },
      {
        name: '招聘',
        icon: 'TeamOutlined',
        path: '/Recruitment',
        children: [
          {
            name: '简历集合',
            path: '/Recruitment/a',
          },
          {
            name: '面试履历',
            path: '/Recruitment/Calender',
          },
         
        ],
      },
      {
        name: '考勤管理',
        icon: 'ShareAltOutlined',
        path: '/AttendanceManager',
        children: [
          {
            name: '考勤数据',
            path: '/attendance',
          },
          {
            name: '审批',
            path: '/crud/:detail?',
          },
          {
            name: '任务',
            path: '/AttendanceManager',
          },
          {
            name: '公共学习平台',
            path: '/AttendanceManager',
          },
          {
            name: '离职',
            path: '/AttendanceManager',
          },
          {
            name: '工资报表',
            path: '/salaryStatements',
          },
         
        ],
      },
     
      {
        name: '个人档案',
        icon: 'BulbOutlined',
        path: '/personal',
        children: [
          {
            name: '动态人才档案',
            path: '/personal/Archives',
          },
          {
            name: '测评',
            path: '/crud',
          },
          {
            name: '情景化评估',
            path: '/crud',
          }
        ],
      },

      //  {
      //   name: '页面',
      //   icon: 'BookOutlined',
      //   path: '/page',
      //   children: [
      //     {
      //       name: '登录页',
      //       path: '/sign/login',
      //     },
      //     {
      //       name: '注册页',
      //       path: '/sign/register',
      //     },
      //     {
      //       name: '锁屏',
      //       path: '/lock',
      //     },
      //     {
      //       name: '画廊',
      //       path: '/gallery',
      //     },
      //     {
      //       name: '空白页',
      //       path: '/blank',
      //     },
      //     {
      //       name: '结果页',
      //       path: '/result',
      //     },
      //     {
      //       name: 'Coming Soon',
      //       path: '/coming',
      //     },
      //     {
      //       name: '403',
      //       path: '/403',
      //     },
      //     {
      //       name: '404',
      //       path: '/404',
      //     },
      //     {
      //       name: '500',
      //       path: '/500',
      //     },
      //     {
      //       name: '多级路由',
      //       path: '/level-route/:sub?',
      //     },
      //   ],
      // },
    ], 400)
  } 
}