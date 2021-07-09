import React from 'react';
import { connect } from 'dva';
import { Layout,Avatar} from 'antd';
import BaseComponent from 'components/BaseComponent';
import G2 from 'components/Charts/G2';
import Panel from 'components/Panel';
import { UserOutlined } from '@ant-design/icons';
import Image from 'components/Image';
import './index.less';
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
            <div style={{width:'20%', border:'red 1px solid'}}>


            </div>
            <div style={{width:'80%'}}>
              <div style={{height:'70%'}}>
                  <div style={{height:'40%',display:'flex',justifyContent:'space-around'}}>
                    <div style={{width:'48%',background:'blue'}}></div>
                    <div style={{width:'48%',background:'blue'}}></div>
                  </div>
                  <div style={{height:'60%',display:'flex',justifyContent:'space-around'}}>
                    
                    <Panel title="折线图" width='48%'>
                    </Panel>
                    
                    <Panel title="折线图" width='48%'>
                      <Bar1 data={bar1} />  
                    </Panel>
                    
                  </div>
              </div>
              <div style={{height:'50%',display:'flex',justifyContent:'space-around'}}>
                <Panel title="折线图" width="32%">
                       
                </Panel>
                <Panel title="折线图" width="32%">
                       
                </Panel>
                <Panel title="折线图" width="32%">
                      
                </Panel>
              </div>
            </div>
        </Content>
        <Footer style={{ height:'100px',textAlign: 'left', zIndex: 1}}>
        
        <Avatar
          size={60}
          icon={<UserOutlined />}
          src={require('assets/images/avatar.jpg')}
        />,
         <Avatar
          size={64}
          src={require('assets/images/avatar.jpg')}
        />,
         <Avatar
          size={64}
           icon={<UserOutlined />}
        />,
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