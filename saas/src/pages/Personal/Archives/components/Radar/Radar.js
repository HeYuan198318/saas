import React from 'react';
import EC from 'components/Charts/ECharts/EC';
import 'echarts/lib/chart/radar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

function getOption() {
  return {
    title: {
      text: '多維度分析'
    },
    tooltip: {},
    legend: {
      data: ['平均水平', '个人水平']
    },
    radar: {
      // shape: 'circle',
      name: {
        textStyle: {
          color: '#fff',
          backgroundColor: '#999',
          borderRadius: 3,
          padding: [3, 5]
        }
      },
      indicator: [
        { name: '组织能力', max: 6500 },
        { name: '分析能力', max: 16000 },
        { name: '沟通能力', max: 30000 },
        { name: '业务能力', max: 38000 },
        { name: '创新能力', max: 52000 },
        { name: '抗压能力）', max: 25000 }
      ]
    },
    series: [
      {
        name: '平均水平 vs 个人水平',
        type: 'radar',
        data: [
          {
            value: [4300, 10000, 28000, 35000, 50000, 19000],
            name: '平均水平'
          },
          {
            value: [5000, 14000, 28000, 31000, 42000, 21000],
            name: '个人水平'
          }
        ]
      }
    ]
  };
}

export default props => <EC option={getOption()} />;
