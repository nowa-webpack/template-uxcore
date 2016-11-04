import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Menu from 'uxcore/lib/Menu';

const { React, ReactRouter, ReactDOM } = window;
// `ReactRouter`文档请看  https://github.com/ReactTraining/react-router/tree/v2.8.1
const { Router, Link, hashHistory } = ReactRouter;

const App = ({ children, location, routes }) => {
  return (
    <div>
      <Menu mode="horizontal" selectedKeys={routes[routes.length - 1].title}>
        <Menu.Item key="home">
          <Link to={'/home'} >首页</Link>
        </Menu.Item>
        <Menu.Item key="demo">
          <Link to={'/demo'} >DEMO</Link>
        </Menu.Item>
        <Menu.Item key="error">
          <Link to={`/${Math.random().toString(32).slice(2)}`} >错误页面</Link>
        </Menu.Item>
      </Menu>
      <div className="kuma-container kuma-container-1180">
        <ReactCSSTransitionGroup transitionName="route" transitionEnterTimeout={500} transitionLeaveTimeout={100}>
          {React.cloneElement(children || 'div', {
            key: location.pathname,
          })}
        </ReactCSSTransitionGroup>
      </div>
    </div>
  );
};

// 同样匹配`/users/123/portfolios/345`
// `this.props.params`是`{userId: '123', portfolioId: 345}`
// `this.props.routeParams`是`{userId: '123'}`
const homeRoute = {
  path: 'home',
  // 这里可以给routes里面设置数据
  title: 'home',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../pages/home'));
    });
  },
};

const demoRoute = {
  path: 'demo',
  title: 'demo',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../pages/demo'));
    });
  },
};

const errorRoute = {
  path: '*',
  title: 'error',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../pages/error'));
    });
  },
};

const rootRoute = {
  childRoutes: [{
    path: '/',
    component: App,
    // 这里可以设置首页跳转的地址
    indexRoute: { onEnter: (nextState, replace) => replace('/home') },
    childRoutes: [
      // 新建页面时，请注意更新此处的路由
      homeRoute,
      demoRoute,
      // error因为是泛匹配，所以要放到下面
      // 不然会覆盖前面的
      errorRoute,
    ],
  }],
};

ReactDOM.render((
  <Router history={hashHistory} routes={rootRoute} />
),
  document.getElementById('App')
);
