<% if (SPA) { %>
export default {
  path: 'home',
  title: 'home',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./PageHome.jsx'));
    }, 'home');
  },
};<%}else{%>
import PageHome from './PageHome';

export default PageHome;

<% } %>
