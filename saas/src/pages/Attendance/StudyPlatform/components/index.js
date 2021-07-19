import React from 'react';
import { connect } from 'dva';
import { Layout,Row,Col,Divider,Card,Tag } from 'antd';
import BaseComponent from 'components/BaseComponent';
import './index.less';
import Panel from 'components/Panel';
const { Content } = Layout;
const { Meta } = Card;
const style = { background: '#0092ff', padding: '8px 0' };

@connect()
export default class extends BaseComponent {
  render() {
    return (
      <Layout className="full-layout page main-page">
        <Content>
          
        <Row gutter={16}>
            <Col md={6}>
              <Panel header={false} cover>
              <Row>
                  <Col span={12}> <span>已有456人购买</span></Col>
                  <Col span={12} ><p style={{textAlign:'right',font:'24px bold',color:'red'}}>免费</p></Col>
                </Row>
              </Panel>
            </Col>
            <Col md={6}>
              <Panel className="wechat" header={false} cover>
              <Row>
                  <Col span={12}> <span>已有456人购买</span></Col>
                  <Col span={12} ><p style={{textAlign:'right',font:'24px bold',color:'red'}}>免费</p></Col>
                </Row>
              </Panel>
            </Col>
            <Col md={6}>
              <Panel className="github"  header={false} cover>
              <Row>
                  <Col span={12}> <span>已有456人购买</span></Col>
                  <Col span={12} ><p style={{textAlign:'right',font:'24px bold',color:'red'}}>免费</p></Col>
                </Row>
              </Panel>
            </Col>
            <Col md={6}>
              <Panel className="github" header={false} cover>
              <Row>
                  <Col span={12}> <span>已有456人购买</span></Col>
                  <Col span={12} ><p style={{textAlign:'right',font:'24px bold',color:'red'}}>免费</p></Col>
                </Row>
              </Panel>
            </Col>
          </Row>
          <Divider orientation="left" style={{color:'red'}}>精彩内容不容错过!</Divider>
          <Row gutter={16}>
            <Col md={6}>
            <Panel header={false} cover>
              <Card
                hoverable
                style={{ width: '100%' }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" height='400px'/>}
              >
                <h3><Tag color="volcano" >播音</Tag>
                    <Tag color="orange" >配音</Tag>
                   播音与配音实战全能班</h3>
                时间:2021-06-09 10:00:00 | 123课时<br></br>
                导师:郭麒麟
                <hr></hr>
                <Row>
                  <Col span={12}> <span>已有456人购买</span></Col>
                  <Col span={12} ><p style={{textAlign:'right',font:'24px bold',color:'red'}}>￥4299</p></Col>
                </Row>
                </Card>
              </Panel>
            </Col>
            <Col md={6}>
              <Panel header={false} cover>
              <Card
                hoverable
                style={{ width: '100%' }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" height='400px'/>}
              >
              <h3><Tag color="volcano" >播音</Tag>
                    <Tag color="orange" >配音</Tag>
                   播音与配音实战全能班</h3>
                时间:2021-06-09 10:00:00 | 123课时<br></br>
                导师:郭麒麟
                <hr></hr>
                <Row>
                  <Col span={12}> <span>已有456人购买</span></Col>
                  <Col span={12} ><p style={{textAlign:'right',font:'24px bold',color:'red'}}>￥4299</p></Col>
                </Row>
                </Card>
              </Panel>
            </Col>
            <Col md={6}>
              <Panel header={false} cover>
              <Card
                hoverable
                style={{ width: '100%' }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" height='400px'/>}
              >
                 <h3><Tag color="volcano" >播音</Tag>
                    <Tag color="orange" >配音</Tag>
                   播音与配音实战全能班</h3>
                时间:2021-06-09 10:00:00 | 123课时<br></br>
                导师:郭麒麟
                <hr></hr>
                <Row>
                  <Col span={12}> <span>已有456人购买</span></Col>
                  <Col span={12} ><p style={{textAlign:'right',font:'24px bold',color:'red'}}>￥4299</p></Col>
                </Row>
                       
                {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
                </Card>
              </Panel>
            </Col>
            <Col md={6}>
              <Panel header={false} cover>
              <Card
                hoverable
                style={{ width: '100%' }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" height='400px'/>}
              >
               <h3><Tag color="volcano" >播音</Tag>
                    <Tag color="orange" >配音</Tag>
                   播音与配音实战全能班</h3>
                时间:2021-06-09 10:00:00 | 123课时<br></br>
                导师:郭麒麟
                <hr></hr>
                <Row>
                  <Col span={12}> <span>已有456人购买</span></Col>
                  <Col span={12} ><p style={{textAlign:'right',font:'24px bold',color:'red'}}>￥4299</p></Col>
                </Row>
                </Card>
              </Panel>
            </Col>
          </Row>
    
        </Content>
      </Layout>
    );
  }
}
