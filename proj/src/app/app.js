import './app.less';
<% if (SPA) { %>
import './routes.jsx';
<% } %>

const { Reflux, Promise, chrome } = window;

if (__LOCAL__ && chrome && chrome.webstore) { // This is a Chrome only hack
  // see https://github.com/livereload/livereload-extensions/issues/26
  setInterval(() => {
    document.body.focus();
  }, 200);
}

// 数据流采用`Reflux`方案，具体文档请看 https://github.com/reflux/refluxjs
Reflux.use(require("reflux-promise")(Promise));