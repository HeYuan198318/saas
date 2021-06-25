/**
 * 模拟工资报表数据
 */
 export default ({fetchMock, delay, mock, toSuccess, toError}) => {
  return {
    // 表格带分页
    '/api/salaryStatements/getList': (options) => {
      const body = JSON.parse(options.body);
      const currentPage = body.currentPage;
      const idbase = (currentPage - 1) * 10 + 1;
      const paramMap = body.paramMap;
      const deptName = paramMap.deptName;

      if (deptName == 'abcd') {
        return toSuccess(mock({
          'currentPage': currentPage,
          'showCount': body.showCount,
          'totalResult': 0,
          'totalPage': 0,
          dataList: [],
        }), 400)
      }

      return toSuccess(mock({
        'currentPage': currentPage,
        'showCount': body.showCount,
        'totalResult': 100,
        'totalPage': 10,
        [`dataList|${body.showCount}`]: [{
          'id|+1': idbase,
          //'deptName': deptName ? deptName : '@cword(3, 5)',      
          'deptName|1': deptName ? deptName :['0', '1'],
          'jobName': '@cname()',
          'shouldDay': '22',  
          'actualDay': '@int(20,22)',
          'basicSalary': '￥@int(3000,12000)',
          'jobsSalary': '￥@int(3000,12000)',
          'performance': '￥@int(500,2000)',
          'deductions': '￥@int(100,500)',
          'socialSecurity': '-￥@int(500,1000)',
          'fullTime': '￥@int(100,500)',
          'addDay': '@int(2,8)',
          'addPay': '￥@int(400,2500)',
          'realSalary':'￥@int(5000,15000)',
          'workEmployee|1-3': [{
            'key|+1': 1,
            'title': '@cname',
          }],
          'content': '@csentence',
        }],
      }), 400)
    },
    '/api/salaryStatements/bathDelete': (options) => toSuccess({options}, 400),
    '/api/salaryStatements/getWorkEmployee': (options) => mock({
      'status': true,
      'data|10': [{
        'key|+1': 1,
        'title': '@cname',
      }]
    }),
    '/api/salaryStatements/save': (options) => toSuccess({options}, 800),
  }
}