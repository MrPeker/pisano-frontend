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
class okutulmusUrunler extends Component {
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

  render() {
    const {
      list: { list = [] },
    } = this.state;

    const { loading: propsLoding } = this.state;
    const { loading: stateLoading } = this.props;
    const loading = propsLoding || stateLoading;



    return (
      <GridContent>
        <Input style={{ width: 975 }} onChange={this.handleChange} onPressEnter={this.check} />
        <div className={styles.coverCardList}>
          <div className={styles.cardList}>{cardList}</div>
        </div>
      </GridContent>
    );
  }
}

export default okutulmusUrunler;
