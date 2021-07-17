import React, { Component } from 'react';
import { Calendar, Badge ,Typography} from 'antd';
import './index.css'

export default class interviewCV extends Component {
  
  render() {
    function getListData(value) {
      let listData;
      switch (value.date()) {
        case 8:
          listData = [
            { type: 'warning', content: '下午2点 张三 线上面试.' },
            { type: 'success', content: '下午3点 李四 线上面试.' },
            { type: 'success', content: '下午3点 李四 线上面试.' },
          ];
          break;
      case 9:
        listData = [
          { type: 'warning', content: '下午2点 张三 线上面试.' },
          { type: 'success', content: '下午2点 张三 线上面试.' },
          { type: 'error', content: '下午2点 张三 线上面试.' },
        ];
        break;
        case 10:
          listData = [
            { type: 'warning', content: '下午2点 张三 线上面试.' },
            { type: 'success', content: '下午2点 张三 线上面试.' },
            { type: 'error', content: '下午2点 张三 线上面试.' },
          ];
          break;
      case 13:
        listData = [
          { type: 'warning', content: '下午2点 张三 线上面试.' },
          { type: 'success', content: '下午2点 张三 线上面试.' },
          { type: 'error', content: '下午2点 张三 线上面试.' },
        ];
        break;
        case 15:
          listData = [
            { type: 'warning', content: '下午2点 张三 线上面试' },
            { type: 'success', content: '下午2点 张三 线上面试' },
            { type: 'error', content: '下午2点 张三 线上面试.' },
            { type: 'error', content: '下午2点 张三 线上面试.' },
            
          ];
          break;
        default:
      }
      return listData || [];
    }
    
    function dateCellRender(value) {
      const listData = getListData(value);
      return (
        <div style={{width:'100%', backgroundColor:'#90d7ec'}}>
          <ul className="events">
            {listData.map(item => (
              <li key={item.content}>
                <Badge status={item.type} text={item.content} />
              </li>
            ))}
          </ul>
        </div>
        
      );
    }
    
    function getMonthData(value) {
      if (value.month() === 8) {
        return 1394;
      }
    }
    
    function monthCellRender(value) {
      const num = getMonthData(value);
      return num ? (
        <div className="notes-month">
          <section>{num}</section>
          <span>Backlog number</span>
        </div>
      ) : null;
    }
    return (
      <div>
        <Typography.Title level={4}>面试计划排配</Typography.Title>
        <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />,
      </div>
    )
  }
}
