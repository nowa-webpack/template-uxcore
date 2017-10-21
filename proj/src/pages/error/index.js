<% if (SPA) { %>
export default {
  path: '*',
  title: 'error',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./PageError'));
    }, 'error');
  },
};

<%}else{%>
import PageError from './PageError';

export default PageError;

<% } %>
