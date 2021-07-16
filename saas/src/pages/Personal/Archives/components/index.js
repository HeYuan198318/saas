import React from 'react';
import { connect } from 'dva';
import { Layout,Avatar,Row,Col,Tag } from 'antd';
import BaseComponent from 'components/BaseComponent';
import Image from 'components/Image'
import background from 'assets/images/avatar.jpg'
import G2 from 'components/Charts/G2';
import Panel from 'components/Panel';
import { UserOutlined,PlusCircleOutlined } from '@ant-design/icons';
import './index.less';
import { URL } from 'min-document';
const { Content,Footer } = Layout;
const { Chart, Axis, Geom, Tooltip, Legend, Coord, Label } = G2;

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
            <div style={{width:'20%',background:'#A6F0F5'}}>
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
         

            </div>
            
            <div style={{width:'80%'}}>
              <div style={{height:'70%'}}>
                
                  <div style={{height:'40%',justifyContent:'space-around',display:'flex',}}>
                    <div style={{width:'48%',background:'#FFFFFF'}}></div>
                    
                    <div style={{width:'48%',background:'#FFFFFF'}}></div>
                   
                  </div>

                  <div style={{height:'60%',display:'flex',justifyContent:'space-around',marginTop:'10px'}}>
                    
                    <Panel header={false} cover cover width='48%'>
                    </Panel>
                    
                    <Panel header={false} cover width='48%'>
                      <Bar1 data={bar1} />  
                    </Panel>
                    
                  </div>
              </div>
              <div style={{height:'50%',display:'flex',justifyContent:'space-around'}}>
                <Panel header={false} cover width="32%">
                       
                </Panel>
                <Panel header={false} cover width="32%">
                       
                </Panel>
                <Panel header={false} cover width="32%">
                      
                </Panel>
              </div>
            </div>
        </Content>
       
        <Footer style={{ height:'100px',textAlign: 'left', zIndex: 1}}>
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
        </Footer>
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