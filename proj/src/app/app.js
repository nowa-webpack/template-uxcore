import Reflux from 'reflux';
import RefluxPromise from 'reflux-promise';
import Promise from 'lie';
import 'uxcore/assets/iconfont.css';
import 'uxcore/assets/orange.css';
import './app.less';
<% if (SPA) { %>
import './routes';
<% } %>
// This is a Chrome only hack
if (__LOCAL__ && window.chrome && chrome.webstore) {
  // see https://github.com/livereload/livereload-extensions/issues/26
  setInterval(() => {
    document.body.focus();
  }, 200);
}

// 数据流采用`Reflux`方案，具体文档请看 https://github.com/reflux/refluxjs
Reflux.use(RefluxPromise(Promise));
