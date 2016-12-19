<% if (SPA) { %>
export default {
  path: '*',
  title: 'error',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./PageError.jsx'));
    }, 'error');
  },
};

<%}else{%>
export default from './PageError.jsx';

<% } %>
