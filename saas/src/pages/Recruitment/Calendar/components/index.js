import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import BaseComponent from 'components/BaseComponent';
import './index.less';
import InterviewCV from '../components/calendar/calendar'
const { Content } = Layout;

@connect()
export default class extends BaseComponent {
  render() {
    return (
      <Layout className="full-layout page calendar-page">
        <Content>
            <InterviewCV/>
        </Content>
      </Layout>
    );
  }
}
