import React, { Component } from 'react'
import { Layout, Col, Row,Tag, Divider} from 'antd';
import Icon from 'components/Icon';
export default class peopleinfo extends Component {
  render() {
    return (
      <div>
       <Row>
            <Col span={14}>
              <div style={{marginLeft:'15px'}}>
                <Icon type="BorderOutlined" style={{fontSize:'15px'}} antd></Icon>
                <span style={{fontSize:'25px'}}><b> 赵荣</b></span> 女.30-6年工作經驗.在職
                <div style={{marginTop:'5px'}}>
                <div style={{marginLeft:'15px'}}>
                  <Icon type="user" style={{fontSize:'20px'}}/>
                  <span style={{marginLeft:'15px'}}>恆大三角公司xxxx.高級管理人員.2018-02-至今</span>
                  <span style={{marginLeft:'15px'}}>恆大三角公司xxxx.高級管理人員.2018-02-至今</span>
                </div>
                <div style={{marginLeft:'15px'}}>
                  <Icon type="IdcardFilled" style={{fontSize:'20px'}} antd/>
                  <span style={{marginLeft:'15px'}}>西南石油大學.經濟學.本科。2012-09至2016-06</span>
                  <span style={{marginLeft:'15px'}}>西南石油大學.經濟學.本科。2012-09至2016-06</span>
                </div>
                <Tag color="blue">民企背景</Tag>
                </div>
              </div>
            </Col>
            <Col span={5}><div style={{marginTop:'30px'}}>
              <span>2019-03-06</span>
              </div></Col>
            <Col span={5}><div style={{marginTop:'30px'}}><span>2020-05-21</span></div></Col>
        </Row>
      </div>
    )
  }
}
