import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: 'Ayzberq YAZILIM',
          title: 'Ayzberq YAZILIM',
          href: '',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <Icon type="github" />,
          href: '',
          blankTarget: true,
        },
        {
          key: 'Ayzberq Yazılım',
          title: 'Ayzberq Yazılım',
          href: '',
          blankTarget: true,
        },
      ]}
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> 2018
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
