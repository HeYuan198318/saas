import React from 'react';
import { connect } from 'dva';
import { Layout, Col, Row,Tag, Divider,Input,Space } from 'antd';
import Icon from 'components/Icon';
import BaseComponent from 'components/BaseComponent';
import Panel from 'components/Panel';
import G2 from 'components/Charts/G2';
import DataSet from '@antv/data-set';
import './index.less';
import Peopleinfo from './peopleInfo/index';
import BaiduMap from './BaiduMap/index';
const { Content } = Layout;
const { Chart, Axis, Geom, Tooltip, Legend, Coord, Label } = G2;
const { Search } = Input;

const rankingListData = [];
for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `工专路 ${i} 号店`,
    total: 323234
  });
}

@connect(({ dashboard }) => ({
  dashboard
}))
export default class Dashboard extends BaseComponent {
  render() {
    const { dashboard } = this.props;
    const { bar1, bar2 } = dashboard;
    return (
      <Layout className="full-layout page dashboard-page">
        <Content>
          <Row gutter={20}>
            <Col md={8}>
              <Panel className="qq" header={false} cover >
                <Icon type="QqOutlined" antd />
                <h2>
                  <b>523</b>
                </h2>
                <h5 className="text-muted">候选人总数</h5>
              </Panel>
            </Col>
            <Col md={8}>
              <Panel className="wechat" header={false} cover >
                <Icon type="WechatOutlined" antd />
                <h2>
                  <b>99+</b>
                </h2>
                <h5 className="text-muted">追踪激活效果</h5>
              </Panel>
            </Col>
            <Col md={8}>
              <Panel className="github" header={false} cover >
                <Icon type="GithubOutlined" antd />
                <h2>
                  <b>1k+</b>
                </h2>
                <h5 className="text-muted">新建激活</h5>
              </Panel>
            </Col>
          </Row>
          <Row >
            <Col>
              <Panel title="简历标签" height={180}>                       
                  <div style={{marginBottom:'15px'}} >              
                    系统标签:&nbsp;&nbsp;&nbsp;
                    <Tag color="success" closable>专升本</Tag>
                      <Tag color="processing" closable>BAT</Tag>              
                      <Tag color="default" closable>default</Tag>                  
                  </div> 
                  <div style={{marginBottom:'15px'}} > 
                    教育背景:&nbsp;&nbsp;&nbsp;
                    <Tag color="volcano" closable>天津理工大学</Tag>
                    <Tag color="orange" closable>电子科技大学</Tag>
                  </div> 
                  <div style={{marginBottom:'15px'}} >                     
                    工作经历:&nbsp;&nbsp;&nbsp;                
                    <Tag color="gold" closable>百度</Tag>
                    <Tag color="lime" closable>华为</Tag>
                    <Tag color="green" closable>光大银行</Tag>
                    <Tag color="cyan" closable>阿里巴巴有限公司</Tag>           
                  </div> 
                  <div style={{marginBottom:'15px'}} >                     
                    关键技能:&nbsp;&nbsp;&nbsp;
                    <Tag color="magenta" closable>数据分析</Tag>
                    <Tag color="volcano" closable>消费类型</Tag>
                    <Tag color="orange" closable>优化用户设置和转化方案</Tag>
                    <Tag color="lime" closable>项目管理</Tag>
                    <Tag color="green" closable>计算机科学与技术</Tag>
                    <Tag color="cyan" closable>数据中台</Tag>
                    <Tag color="blue" closable>潜力产品分析</Tag> 
                    <Tag color="geekblue" closable>资源整合</Tag>
                    <Tag color="purple" closable>软件工程</Tag>                 
                  </div> 
    
              </Panel>
            </Col>
          </Row>
          
          <Row>
            <Col>
              <Panel title="人才列表" height={280}>
              <Row>
                  <Col span={14}>人才列表
                    <span>   <Search placeholder="候选人关键词" style={{ width: 200 }} /></span>  
                  </Col>
                  <Col span={5}><span>申請時間</span></Col>
                  <Col span={5}><span>歸檔時間</span></Col>
                </Row>
                <hr></hr>
                <div style={{height:'100%',width:'100%',overflow: 'scroll'}}>
                  <Peopleinfo/>
                  <Peopleinfo/>
                  <Peopleinfo/>
                  <Peopleinfo/>
                  <Peopleinfo/>
                  <Peopleinfo/>
                </div>
              </Panel>
            </Col>
          </Row>
          <Row gutter={20}>
            <Col md={6}>
              <Panel title="折线图" height={260}>
                <Line1 />
              </Panel>
            </Col>
            <Col md={6}>
              <Panel title="饼图" height={260}>
                <Pie1 />
              </Panel>
            </Col>
            <Col md={6}>
              <Panel title="人才分布地图" height={260}>
                <BaiduMap/>
              </Panel>
            </Col>
            <Col md={6}>
              <Panel title="柱状图" height={260}>
                <Bar1 data={bar1} />          
              </Panel>
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}

// source https://alibaba.github.io/BizCharts/demo-detail.html?code=demo/bar/basic-column
const Bar1 = props => {
  return (
    <Chart data={props.data} scale={{ sales: { tickInterval: 20 } }}>
      <Axis name="year" />
      <Axis name="sales" />
      <Tooltip crosshairs={{ type: 'y' }} />
      <Geom
        type="interval"
        position="year*sales"
        color={[
          'year',
          ['#3da0ff', '#51ca73', '#fad337', '#424e87', '#985ce6']
        ]}
      />
    </Chart>
  );
};

// source https://alibaba.github.io/BizCharts/demo-detail.html?code=demo/bar/grouped-column
const Bar2 = props => {
  const ds = new DataSet();
  const dv = ds.createView().source(props.data);
  dv.transform({
    type: 'fold',
    fields: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.'], // 展开字段集
    key: '月份', // key字段
    value: '月均降雨量' // value字段
  });
  return (
    <Chart data={dv}>
      <Axis name="月份" />
      <Axis name="月均降雨量" />
      <Legend />
      <Tooltip crosshairs={{ type: 'y' }} />
      <Geom
        type="interval"
        position="月份*月均降雨量"
        color={'name'}
        adjust={[{ type: 'dodge', marginRatio: 1 / 32 }]}
      />
    </Chart>
  );
};

const Pie1 = props => {
  const data = [
    { item: '事例一', count: 40 },
    { item: '事例二', count: 21 },
    { item: '事例三', count: 17 },
    { item: '事例四', count: 13 },
    { item: '事例五', count: 9 }
  ];

  const dv = new DataSet.DataView();
  dv.source(data).transform({
    type: 'percent',
    field: 'count',
    dimension: 'item',
    as: 'percent'
  });
  const cols = {
    percent: {
      formatter: val => {
        val = val * 100 + '%';
        return val;
      }
    }
  };
  return (
    <Chart data={dv} scale={cols} padding={10}>
      <Coord type={'theta'} radius={0.75} innerRadius={0.6} />
      <Axis name="percent" />
      <Legend
        position="right"
        offsetY={-window.innerHeight / 2 + 120}
        offsetX={-100}
      />
      <Tooltip
        showTitle={false}
        itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
      />
      <Geom
        type="intervalStack"
        position="percent"
        color="item"
        tooltip={[
          'item*percent',
          (item, percent) => {
            percent = percent * 100 + '%';
            return {
              name: item,
              value: percent
            };
          }
        ]}
        style={{ lineWidth: 1, stroke: '#fff' }}
      >
        <Label
          content="percent"
          formatter={(val, item) => {
            return item.point.item + ': ' + val;
          }}
        />
      </Geom>
    </Chart>
  );
};

// https://alibaba.github.io/BizCharts/demo-detail.html?code=demo/line/series
const Line1 = props => {
  const data = [
    { month: 'Jan', Tokyo: 7.0, London: 3.9 },
    { month: 'Feb', Tokyo: 6.9, London: 4.2 },
    { month: 'Mar', Tokyo: 9.5, London: 5.7 },
    { month: 'Apr', Tokyo: 14.5, London: 8.5 },
    { month: 'May', Tokyo: 18.4, London: 11.9 },
    { month: 'Jun', Tokyo: 21.5, London: 15.2 },
    { month: 'Jul', Tokyo: 25.2, London: 17.0 },
    { month: 'Aug', Tokyo: 26.5, London: 16.6 },
    { month: 'Sep', Tokyo: 23.3, London: 14.2 },
    { month: 'Oct', Tokyo: 18.3, London: 10.3 },
    { month: 'Nov', Tokyo: 13.9, London: 6.6 },
    { month: 'Dec', Tokyo: 9.6, London: 4.8 }
  ];
  const ds = new DataSet();
  const dv = ds.createView().source(data);
  dv.transform({
    type: 'fold',
    fields: ['Tokyo', 'London'], // 展开字段集
    key: 'city', // key字段
    value: 'temperature' // value字段
  });

  const cols = {
    month: {
      range: [0, 1]
    }
  };
  return (
    <Chart data={dv} scale={cols}>
      <Legend />
      <Axis name="month" />
      <Axis name="temperature" label={{ formatter: val => `${val}°C` }} />
      <Tooltip crosshairs={{ type: 'y' }} />
      <Geom type="line" position="month*temperature" size={2} color={'city'} />
      <Geom
        type="point"
        position="month*temperature"
        size={4}
        shape={'circle'}
        color={'city'}
        style={{ stroke: '#fff', lineWidth: 1 }}
      />
    </Chart>
  );
};
