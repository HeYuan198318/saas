import React from 'react';
import { connect } from 'dva';
import { Layout,Avatar,Row,Col,Tag } from 'antd';
import BaseComponent from 'components/BaseComponent';
import Image from 'components/Image'
import background from 'assets/images/avatar.jpg'
import G2 from 'components/Charts/G2';
import Radar from './Radar/Radar';
import Bar from './Bar/Bar';
import Gauge from './Gauge/gauge';
import Panel from 'components/Panel';
import {Timeline,Steps,Tooltip, Progress} from 'antd';
import { UserOutlined,PlusCircleOutlined,SolutionOutlined,LoadingOutlined,SmileOutlined,FundTwoTone} from '@ant-design/icons';
import './index.less';
import { URL } from 'min-document';
const { Content,Footer } = Layout;
const { Chart, Axis, Geom, Legend, Coord, Label } = G2;
const { Step } = Steps;

@connect(({ archives }) => ({
  archives
}))
export default class Archives extends BaseComponent {
 
  render() {
    const { archives } = this.props;
    const { bar1, bar2 } = archives;
    return (
      <Layout className="full-layout page archives-page">
        <Content style={{display:'flex',overflowY: 'scroll'}}>
            <div style={{width:'20%',backgroundColor:'#90d7ec'}}>
            <Panel header={false} cover >
              <Row style={{position: 'relative'}}>
                <Col>
                <Image src={background}></Image>
                <span style={{position: 'absolute', bottom: 30, left: 20,fontSize:'23px',color:'#FFFFFF'}}>张三</span>
                <span style={{position: 'absolute', bottom: 10, left:20,color:'#FFFFFF'}}>软件工程师</span>
                </Col>
              </Row>
             
                <Tag color="magenta" closable>数据分析</Tag>
                <Tag color="volcano" closable>消费类型</Tag>
                <Tag color="lime" closable>项目管理</Tag>
                <Tag color="orange" closable>优化用户设置和转化方案</Tag>
                <Tag color="green" closable>计算机科学与技术</Tag>
                <Tag color="cyan" closable>数据中台</Tag>         
              
             <hr></hr>
           
            </Panel>
            <h3>选择查看人才信息</h3>
              <Row>
                  <Col span={5} style={{textAlign:'center'}}>
                    <Avatar size={60} icon={<UserOutlined />} src={require('assets/images/avatar.jpg')} />
                    <span>张三</span>           
                  </Col>
                  <Col span={5} style={{textAlign:'center'}}>
                    <Avatar size={60} icon={<UserOutlined />} src={require('assets/images/avatar.jpg')} />
                    <span>李四</span>           
                  </Col>
                  <Col span={5} style={{textAlign:'center'}}>
                    <Avatar size={60} icon={<UserOutlined />} src={require('assets/images/avatar.jpg')} />
                    <span>王五</span>           
                  </Col>
                  <Col span={5} style={{textAlign:'center'}}>
                    <Avatar size={60} icon={<UserOutlined />} src={require('assets/images/avatar.jpg')} />
                    <span>王五</span>           
                  </Col>
                  
              </Row>
              <Row>
                  <Col span={5} style={{textAlign:'center'}}>
                    <Avatar size={60} icon={<UserOutlined />} src={require('assets/images/avatar.jpg')} />
                    <span>张三</span>           
                  </Col>
                  <Col span={5} style={{textAlign:'center'}}>
                    <Avatar size={60} icon={<UserOutlined />} src={require('assets/images/avatar.jpg')} />
                    <span>李四</span>           
                  </Col>
                  <Col span={5} style={{textAlign:'center'}}>
                    <Avatar size={60} icon={<UserOutlined />} src={require('assets/images/avatar.jpg')} />
                    <span>王五</span>           
                  </Col>
                  <Col span={5} style={{textAlign:'center'}}>
                    <Avatar size={60} icon={<UserOutlined />} src={require('assets/images/avatar.jpg')} />
                    <span>王五</span>           
                  </Col>
                
              </Row>
              <Row>
                
                  <Col span={5} style={{textAlign:'center'}}>
                    <Avatar size={60} icon={<UserOutlined />} src={require('assets/images/avatar.jpg')} />
                    <span>李四</span>           
                  </Col>
                  <Col span={5} style={{textAlign:'center'}}>
                    <Avatar size={60} icon={<UserOutlined />} src={require('assets/images/avatar.jpg')} />
                    <span>王五</span>           
                  </Col>
                  <Col span={5} style={{textAlign:'center'}}>
                    <Avatar size={60} icon={<UserOutlined />} src={require('assets/images/avatar.jpg')} />
                    <span>王五</span>           
                  </Col>
                  <Col span={5} style={{textAlign:'center'}}> 
                    <Avatar  size={64} icon={<PlusCircleOutlined />} />
                    <span>添加人员</span>
                  </Col>
              </Row>
            </div>
            
            <div style={{width:'80%'}}>
              <div style={{height:'65%'}}>
                  <div style={{height:'30%',justifyContent:'space-around',display:'flex',}}>
                   <Panel header={false} cover  width="48%">
                   <h2><SolutionOutlined />基本信息</h2> 
                    <div style={{width:'70%',margin:'0 auto'}}>
                      <table>
                        <tr>
                          <td colSpan={2}>西南销售二部</td>
                        </tr>
                        <tr>
                          <td colSpan={2}>客户经理</td>
                        </tr>
                        <tr>
                          <td>入职时间：</td>
                          <td>2021.03.14</td>
                        </tr>
                        <tr>
                          <td>政治面貌：</td>
                          <td>党员</td>
                        </tr>
                        <tr>
                          <td>邮箱：</td>
                          <td>251089748@qq.com</td>
                        </tr>
                      </table>
                    </div>
                  
                    </Panel>               
                    <Panel title='成长轨迹' width="48%">                     
                      <Steps>
                        <Step status="finish" title="入职" description="2020/03" icon={<UserOutlined />} />
                        <Step status="finish" title="优秀销售员工" description="2020/08" icon={<SolutionOutlined />} />
                        <Step status="process" title="销售经理" description="2021/07" icon={<LoadingOutlined />} />
                        <Step status="wait" title="Done" icon={<SmileOutlined />} />
                      </Steps>
                    </Panel>
                  </div>
                  <div style={{height:'70%',display:'flex',justifyContent:'space-around'}}>
                    <Panel title="多维度分析" width='48%'>
                      <Radar/>
                    </Panel>
                    
                    <Panel title="竞争力排名" width='48%'>
                      <Bar/>
                    </Panel>
                    
                  </div>
              </div>
              <div style={{height:'35%',display:'flex',justifyContent:'space-around'}}>
                <Panel title='工作经验' width="48%">
                  <Timeline mode='alternate'>
                    <Timeline.Item label="2015-09-01">A公司担任CEO</Timeline.Item>
                    <Timeline.Item label="2015-09-01 09:12:11">B公司担任DBO</Timeline.Item>
                    <Timeline.Item>创业C公司</Timeline.Item>
                    <Timeline.Item label="2015-09-01 09:12:11">上市D公司</Timeline.Item>
                  </Timeline>
                </Panel>
                
                <Panel header={false} cover width="48%">
                    <div style={{width:'100%',height:'100%',backgroundColor:'#afdfe4'}}>
                        <div>
                            <h2><FundTwoTone />竞争力分析</h2>
                        </div>
                      <Gauge/>
                    </div>
                  </Panel>

              </div>
            </div>
            
        </Content>
        {/* <Footer style={{ height:'100px',textAlign: 'left', zIndex: 1}}>
        <Row>
          <Col span={1} style={{textAlign:'center'}}>
            <Avatar size={60} icon={<UserOutlined />} src={require('assets/images/avatar.jpg')} />
            <span>张三</span>           
          </Col>
          <Col span={1} style={{textAlign:'center'}}>
            <Avatar size={60} icon={<UserOutlined />} src={require('assets/images/avatar.jpg')} />
            <span>李四</span>           
          </Col>
          <Col span={1} style={{textAlign:'center'}}>
            <Avatar size={60} icon={<UserOutlined />} src={require('assets/images/avatar.jpg')} />
            <span>王五</span>           
          </Col>
          <Col span={1} style={{textAlign:'center'}}> 
            <Avatar  size={64} icon={<PlusCircleOutlined />} />
            <span>添加人员</span>
          </Col>
        </Row>
        </Footer> */}
      </Layout>
    );
  }
}
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