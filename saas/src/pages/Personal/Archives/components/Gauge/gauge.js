import React from 'react';
import EC from 'components/Charts/ECharts/EC';
import cloneDeep from 'lodash/cloneDeep';
import 'echarts/lib/chart/gauge';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';


function getOption() {
  return {
      // backgroundColor: '#1b1b1b',
      // tooltip: {
      //   formatter: '{a} <br/>{c} {b}'
      // },
      // toolbox: {
      //   show: true,
      //   feature: {
      //     mark: { show: true },
      //     restore: { show: true },
      //     saveAsImage: { show: true }
      //   }
      // },
      series: [
        {
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 1,
          splitNumber: 8,
          axisLine: {
              lineStyle: {
                  width: 6,
                  color: [
                      [0.25, '#FF6E76'],
                      [0.5, '#FDDD60'],
                      [0.75, '#58D9F9'],
                      [1, '#7CFFB2']
                  ]
              }
          },
          axisLabel: {
            color: '#464646',
            fontSize: 20,
            distance: -50,
            formatter: function (value) {
                if (value === 0.875) {
                    return '优';
                }
                else if (value === 0.625) {
                    return '中';
                }
                else if (value === 0.375) {
                    return '良';
                }
                else if (value === 0.125) {
                    return '差';
                }
            }
          },
          axisTick: {
            length: 12,
            lineStyle: {
                color: 'auto',
                width: 2
            }
          },
          splitLine: {
            length: 20,
            lineStyle: {
                color: 'auto',
                width: 5
            }
          },
          pointer: {
             // 分隔线
             shadowColor: '#fff', //默认透明
             shadowBlur: 5
          },
          title: {
            // offsetCenter: [0, '-10%'],
            fontSize: 15
          },
          detail: {
            fontSize: 20,
            offsetCenter: [0, '0%'],
            valueAnimation: true,
            formatter: function (value) {
                return Math.round(value * 100) + '分';
            },
            color: 'auto'
          },
          data: [{
                    value: 0.70,
                    name: '综合评定',
                  
                }]
        },
       
      
      ]
  
  };
}

export default props => <EC option={getOption()} />;