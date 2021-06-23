import React from 'react';
import DataTable from 'components/DataTable';
import Icon from 'components/Icon';
import Button from 'components/Button';

export default (self,employees) => [
  {
    title: '员工部门',
    name: 'deptName',
    tableItem: {},
    searchItem: {
      group: 'abc'
    },
    formItem: {}
  },
  {
    title: '姓名',
    name: 'distributionNetwork',
    dict: [{ code: '0', codeName: '城市' }, { code: '1', codeName: '乡村' }],
    tableItem: {},
    formItem: {
      type: 'select'
    },
    searchItem: {
      type: 'select'
    }
  },
  {
    title: '应出勤天数',
    name: 'address',
    tableItem: {},
    formItem: {},
    searchItem: {}
  },
  {
    title: '实出勤天数',
    name: 'type',
    tableItem: {},
    formItem: {},
    searchItem: {}
  },
  {
    title: '基本工资',
    name: 'planBeginTime',
    tableItem: {},
    formItem: {
      type: 'datetime'
    },
    searchItem: {
      type: 'datetime'
    }
  },
  {
    title: '岗位工资',
    name: 'planEndTime',
    tableItem: {},
    formItem: {
      type: 'datetime'
    },
    searchItem: {
      type: 'datetime'
    }
  },
  {
    title: '绩效功效',
    name: 'workEmployee',
    tableItem: {
      render: text => text.map(item => item.title).join(',')
    },
    formItem: {
      type: 'transfer',
      modal: true,
      dataSource: employees,
      normalize: value => value.map(item => item.key)
    }
  },

  {
    title: '违规扣款',
    name: 'content',
    tableItem: {},
    formItem: {
      type: 'editor'
    }
  },
  {
    title: '社保扣款',
    name: 'datetime',
    tableItem: {},
  },
  {
    title: '全勤奖',
    name: 'datetime',
    tableItem: {},
  },
  {
    title: '加班天数',
    name: 'datetime',
    tableItem: {},
  },
  {
    title: '加班费',
    name: 'datetime',
    tableItem: {},
  },
  {
    title: '实发工资',
    name: 'datetime',
    tableItem: {},
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
