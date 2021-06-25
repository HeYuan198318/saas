import React from 'react';
import DataTable from 'components/DataTable';
import Icon from 'components/Icon';
import Button from 'components/Button';

export default (self,employees) => [
  {
    title: '员工部门',
    name: 'deptName',
    tableItem: {},
    dict: [{ code: '0', codeName: '研发部' }, { code: '1', codeName: '技术部' }],
    searchItem: {
      group: 'abc',
      type: 'select'
    },
    formItem: {
      type: 'select'
    }
  },
  {
    title: '姓名',
    name: 'jobName',
    tableItem: {},
    formItem: { },
    searchItem: {}
  },
  {
    title: '应出勤天数',
    name: 'shouldDay',
    tableItem: {},
    formItem: {type: 'number'},
    searchItem: {}
  },
  {
    title: '实出勤天数',
    name: 'actualDay',
    tableItem: {},
    formItem: {type: 'number'},
    searchItem: {}
  },
  {
    title: '基本工资',
    name: 'basicSalary',
    tableItem: {},
    formItem: {
      type: 'number'
    },

  },
  {
    title: '岗位工资',
    name: 'jobsSalary',
    tableItem: {},
    formItem: {
      type: 'number'
    },
   
  },
  {
    title: '绩效功效',
    name: 'performance',
    tableItem: { },
    formItem: {type:'number' }
  },

  {
    title: '违规扣款',
    name: 'deductions',
    tableItem: {},
    formItem: {type: 'number'}
  },
  {
    title: '社保扣款',
    name: 'socialSecurity',
    tableItem: {
      type: 'number'
    },
    formItem: {type: 'number'}
  },
  {
    title: '全勤奖',
    name: 'fullTime',
    tableItem: { type: 'number'},
    formItem: {type: 'number'}
  },
  {
    title: '加班天数',
    name: 'addDay',
    tableItem: { type: 'number'},
    formItem: {type: 'number'}
  },
  {
    title: '加班费',
    name: 'addPay',
    tableItem: { type: 'number'},
    formItem: {type: 'number'}
  },
  {
    title: '实发薪资',
    name: 'realSalary',
    tableItem: { type: 'number'},
    formItem: {type: 'number'}
  },
  {
    title: '操作',
    tableItem: {
      width: 180,
      render: (text, record) => (
        <DataTable.Oper>
          <Button tooltip="修改" onClick={e => self.onUpdate(record)}>
            <Icon type="edit" />
          </Button>
          <Button tooltip="删除" onClick={e => self.onDelete(record)}>
            <Icon type="trash" />
          </Button>
        </DataTable.Oper>
      )
    }
  }
];
