import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage } from 'umi/locale';
import moment from 'moment';
import { Card, Input, List } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';

import AvatarList from '@/components/AvatarList';
import Ellipsis from '@/components/Ellipsis';

import styles from '../List/Projects.less';

const rankingListData = [];
for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: ` Rate ${i} `,
    total: 323234,
  });
}

@connect(({ chart, loading, list }) => ({
  chart,
  list,
  loading: loading.effects['chart/fetch'],
}))
class Analysis extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'monitor/fetch',
    });
  }

  constructor(props) {
    super(props);
    this.rankingListData = [];
    for (let i = 0; i < 7; i += 1) {
      this.rankingListData.push({
        title: formatMessage({ id: 'app.analysis.test' }, { no: i }),
        total: 323234,
      });
    }
  }

  state = {
    list: {},
    loading: true,
    products: null,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    this.reqRef = requestAnimationFrame(() => {
      dispatch({
        type: 'chart/fetch',
      });
      this.timeoutId = setTimeout(() => {
        this.setState({
          loading: false,
        });
      }, 600);
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'chart/clear',
    });
    cancelAnimationFrame(this.reqRef);
    clearTimeout(this.timeoutId);
  }

  check = () => {
    alert('merhaba2');
  };

  fetchProducts;

  handleChange = e => {
    let url =
      'http://ec2-35-156-118-97.eu-central-1.compute.amazonaws.com/product/search/' +
      e.target.value;
    clearTimeout(this.fetchProducts);
    let that = this;
    this.fetchProducts = setTimeout(() => {
      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let response = JSON.parse(this.responseText);
          if (response.status) {
            console.log(response.products);
            that.setState({
              products: response.products,
            });
          } else {
            if (response.message === 'noResult') {
              that.setState({
                products: [],
              });
            } else {
            }
          }
        }
      };
      xhttp.open('GET', url, true);
      xhttp.send();
    }, 500);
  };

  render() {
    const { products } = this.state;

    const { loading: propsLoading } = this.state;
    const { loading: stateLoading } = this.props;
    const loading = propsLoading || stateLoading;

    const cardList = products ? (
      <List
        rowKey="id"
        loading={loading}
        grid={{ gutter: 12, xl: 4, lg: 3, md: 2, sm: 1, xs: 1 }}
        dataSource={products}
        renderItem={item => (
          <List.Item>
            <Card
              className={styles.card}
              hoverable
              cover={
                <img
                  style={{
                    maxHeight: '300px',
                    width: 'unset',
                    maxWidth: '100%',
                    margin: '5px auto',
                  }}
                  alt={item.title}
                  src={item.image}
                />
              }
            >
              <Card.Meta
                title={<a>{item.title}</a>}
                description={
                  <Ellipsis lines={2}>
                    {item.seller ? item.seller.title : 'Ülkemizde Satışı Yok'}
                  </Ellipsis>
                }
              />
              <div className={styles.cardItemContent} style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', width: '100%', textAlign: 'center' }}>
                  {item.rate || 0}
                  /5 - {item.seller ? item.seller.seller : ''} -{' '}
                  {item.seller ? item.seller.price : '0'}₺
                </span>
              </div>
            </Card>
          </List.Item>
        )}
      />
    ) : null;

    return (
      <GridContent>
        <Input onChange={this.handleChange} onPressEnter={this.check} />
        <div className={styles.coverCardList}>
          <div className={styles.cardList}>{cardList}</div>
        </div>
      </GridContent>
    );
  }
}

export default Analysis;
