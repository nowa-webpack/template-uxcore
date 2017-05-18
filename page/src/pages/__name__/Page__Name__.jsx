<% if (SPA) { %>
import { withRouter } from 'react-router';<% } else { %>
import { render } from 'react-dom';<% } %><% if (i18n) { %>
import i18n from 'i18n';<% } %><% if (logic) { %>
import { Component } from 'refast';
import logic from './logic';
import './Page<%- Name %>.less';

class Page<%- Name %> extends Component {

  constructor(props) {
    super(props, logic);
  }

  render() {
    return (
      <div className="page-<%= name %>">
        page <%= name %>
      </div>
    );
  }
}
<% } else { %>
import { Component } from 'react';
import './Page<%- Name %>.less';

class Page<%- Name %> extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page-<%= name %>">
        page <%= name %>
      </div>
    );
  }
}
<% } %><% if(SPA){ %>
export default withRouter(Page<%- Name %>);
<% } else {%>
render(<Page<%- Name %> />, document.getElementById('App'));
<% } %>