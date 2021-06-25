import React from 'react';
import { connect } from 'dva';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Layout, Button } from 'antd';
import { PrinterOutlined } from '@ant-design/icons';
import BaseComponent from 'components/BaseComponent';
import Toolbar from 'components/Toolbar';
import SearchBar from 'components/SearchBar';
import DataTable from 'components/DataTable';
import { ModalForm } from 'components/Modal';
import createColumns from './columns';
import Print from 'components/Print'
import './index.less';
const { Content, Header, Footer } = Layout;
const Pagination = DataTable.Pagination;

@connect(({ salaryStatements, loading }) => ({
  salaryStatements,
  loading: loading.models.salaryStatements
}))
export default class extends BaseComponent {
  state = {
    record: null,
    visible: false,
    rows: []
  };

  handleDelete = records => {
    const { rows } = this.state;

    this.props.dispatch({
      type: 'salaryStatements/remove',
      payload: {
        records,
        success: () => {
          // 如果操作成功，在已选择的行中，排除删除的行
          this.setState({
            rows: rows.filter(
              item => !records.some(jtem => jtem.id === item.id)
            )
          });
        }
      }
    });
  };

  render() {
    const { salaryStatements, loading, dispatch } = this.props;
    const { pageData, employees } = salaryStatements;
    const columns = createColumns(this);
    const { rows, record, visible } = this.state;

    const searchBarProps = {
      columns,
      onSearch: values => {
        dispatch({
          type: 'salaryStatements/getPageInfo',
          payload: {
            pageData: pageData.filter(values).jumpPage(1, 10)
          }
        });
      }
    };

    const dataTableProps = {
      loading,
      columns,
      rowKey: 'id',
      dataItems: pageData,
      selectType: 'checkbox',
      showNum: true,
      isScroll: true,
      selectedRowKeys: rows.map(item => item.id),
      onChange: ({ pageNum, pageSize }) => {
        dispatch({
          type: 'salaryStatements/getPageInfo',
          payload: {
            pageData: pageData.jumpPage(pageNum, pageSize)
          }
        });
      },
      onSelect: (keys, rows) => this.setState({ rows })
    };

    const modalFormProps = {
      loading,
      record,
      visible,
      columns,
      modalOpts: {
        width: 600
      },
      onCancel: () => {
        this.setState({
          record: null,
          visible: false
        });
      },
      // 新增、修改都会进到这个方法中，
      // 可以使用主键或是否有record来区分状态
      onSubmit: values => {
        dispatch({
          type: 'salaryStatements/save',
          payload: {
            values,
            success: () => {
              this.setState({
                record: null,
                visible: false
              });
            }
          }
        });
      }
    };
    const comps = (
      <div>
        <table border="1" style={{width: '100%'}}>
          <thead>
            <tr>
              <th style={{textAlign: 'center', color: 'aqua'}}>员工部门</th>
              <th style={{textAlign: 'center', color: 'aqua'}}>员工姓名</th>
              <th style={{textAlign: 'center', color: 'aqua'}}>应该出勤天数</th>
              <th style={{textAlign: 'center', color: 'aqua'}}>实际出勤天数</th>
              <th style={{textAlign: 'center', color: 'aqua'}}>岗位薪资</th>
              <th style={{textAlign: 'center', color: 'aqua'}}>实际薪资</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{textAlign: 'center'}}>技术部</td>
              <td style={{textAlign: 'center'}}>张三</td>
              <td style={{textAlign: 'center'}}>21</td>
              <td style={{textAlign: 'center'}}>20</td>
              <td style={{textAlign: 'center'}}>3000</td>
              <td style={{textAlign: 'center'}}>2700</td>
            </tr>
            <tr>
              <td style={{textAlign: 'center'}}>研发部</td>
              <td style={{textAlign: 'center'}}>李四</td>
              <td style={{textAlign: 'center'}}>21</td>
              <td style={{textAlign: 'center'}}>21</td>
              <td style={{textAlign: 'center'}}>3000</td>
              <td style={{textAlign: 'center'}}>3000</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
    return (
      <Layout className="full-layout salaryStatements-page">
        <Header>
          <Toolbar
            appendLeft={
              <Button.Group>
                <Button type="primary" icon={<PlusOutlined />} onClick={this.onAdd}>
                  新增
                </Button>
                <Button
                  disabled={!rows.length}
                  onClick={e => this.onDelete(rows)}
                  icon={<DeleteOutlined />}
                >
                  删除
                </Button>
                <Print trigger={<Button icon={<PrinterOutlined />}>打印</Button>}
                  content={ comps}
                ></Print>
              </Button.Group>
            }
            pullDown={<SearchBar type="grid" {...searchBarProps} />}
          >
            <SearchBar group="abc" {...searchBarProps} />
          </Toolbar>
        </Header>

        <Content>
          <DataTable {...dataTableProps} />
        </Content>

        <Footer>
          <Pagination {...dataTableProps} />
        </Footer>
        <ModalForm {...modalFormProps} />
      </Layout>
    );
  }
}
