<% if (SPA) { %>
export default {
  path: '<%- name %>',
  title: '<%- name %>',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Page<%- Name %>'));
    }, '<%- name %>');
  },
};<%}else{%>
import Page<%- Name %> from './Page<%- Name %>';

export default Page<%- Name %>;

<% } %>
