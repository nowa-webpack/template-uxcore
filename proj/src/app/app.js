import Refast, { LogicRender } from 'refast';
import Message from 'uxcore/lib/Message';
import Dialog from 'uxcore/lib/Dialog';
import EmptyData from 'uxcore/lib/EmptyData';
import { assign } from 'lodash';
import { isDev } from 'variables';
import DB from 'db';<% if (SPA) { %>
import { render } from 'react-dom';
import { Routes, history } from './routes.jsx';<% } %>
import './app.less';

// This is a Chrome only hack
if (isDev && window.chrome && window.chrome.webstore) {
  // see https://github.com/livereload/livereload-extensions/issues/26
  setInterval(() => {
    document.body.focus();
  }, 200);
}

// Refast 文档请看 https://recore.github.io/refast-docs/
Refast.use('fn', {
  message: Message,
  dialog: Dialog,
  DB,<% if (SPA) { %>
  history,<% } %>
});

const Loading = () => <div className="kuma-loading" />;
const Empty = EmptyData || (() => <div>暂无数据</div>);

// 修改 LogicRender 增加默认配置
// 用来自定义Loading和Empty的样式
assign(LogicRender.defaultProps, { Empty, Loading });

<% if (SPA) { %>
render(Routes, document.getElementById('App'));<% } %>
