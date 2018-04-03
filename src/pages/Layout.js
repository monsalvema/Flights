import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../routes';
import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import Trips from '../components/Flight/Flight';
import Filters from '../components/Filter/Filters';

const { Header, Footer, Content } = Layout;

const Routes = () => (
  <Switch>
    {routes.map(route => (
      <Route
        key={route.index}
        exact={route.exact ? route.exact : false}
        path={route.path}
        component={route.component}
      />
    ))}
  </Switch>
);

const Document = () => (
  <Fragment>
    <Layout>
      <Sider>
        <Filters />
      </Sider>
      <Layout>
        <Header
          style={{
            background: '#fff',
            padding: 0,
            textAlign: 'center',
            fontSize: '40px',
          }}>
          Flight report
        </Header>
        <Content>
          <Trips />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Jhonatan Monsalve @2018</Footer>
      </Layout>
    </Layout>
    <Routes />
  </Fragment>
);

export default Document;
