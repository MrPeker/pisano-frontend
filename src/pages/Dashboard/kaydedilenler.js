import React, { PureComponent } from 'react';
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
class Monitor extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'monitor/fetchTags',
    });
  }
  constructor(props) {
    super(props);
    this.rankingListData = [];
    for (let i = 0; i < 7; i += 1) {
      this.rankingListData.push({
        title: formatMessage({ id: 'app.monitor.test' }, { no: i }),
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
        type: 'monitor/fetch',
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
      type: 'monitor/clear',
    });
    cancelAnimationFrame(this.reqRef);
    clearTimeout(this.timeoutId);
  }

  check = () => {
    alert('merhaba2');
  };

  handleChange = () => {
    alert('merhaba');
  };
  render() {
    const {
      list: { list = [] },
    } = this.state;

    const { loading: propsLoding } = this.state;
    const { loading: stateLoading } = this.props;
    const loading = propsLoding || stateLoading;

    const cardList = list ? (
      <List
        rowKey="id"
        loading={loading}
        grid={{ gutter: 24, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 }}
        dataSource={list}
        renderItem={item => (
          <List.Item>
            <Card
              className={styles.card}
              hoverable
              cover={<img alt={item.title} src={item.cover} />}
            >
              <Card.Meta
                title={<a>{item.title}</a>}
                description={<Ellipsis lines={2}>{item.subDescription}</Ellipsis>}
              />
              <div className={styles.cardItemContent}>
                <span>{moment(item.updatedAt).fromNow()}</span>
                <div className={styles.avatarList}>
                  <AvatarList size="mini">
                    {item.members.map((member, i) => (
                      <AvatarList.Item
                        key={`${item.id}-avatar-${i}`}
                        src={member.avatar}
                        tips={member.name}
                      />
                    ))}
                  </AvatarList>
                </div>
              </div>
            </Card>
          </List.Item>
        )}
      />
    ) : null;

    return (
      <GridContent>
        <div className={styles.coverCardList}>
          <div className={styles.cardList}>{cardList}</div>
        </div>
      </GridContent>
    );
  }
}

export default Monitor;
