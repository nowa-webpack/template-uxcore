<% if (SPA) { %>
export default {
  path: '<%- name %>',
  title: '<%- name %>',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Page<%- Name %>.jsx'));
    }, '<%- name %>');
  },
};<%}else{%>
export default from './Page<%- Name %>.jsx';<% } %>
