import './Page<%- Name %>.less';

import classnames from 'classnames';
<% if (i18n) { %>
import i18n from 'i18n';
<% } %>
<% if (store) { %>
import Actions from './actions';
import Store from './store';

class Page<%- Name %> extends Reflux.Component {

  constructor(props) {
    super(props);
    this.store = Store;
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
class Page<%- Name %> extends React.Component {

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

<% } %>

<% if(SPA){ %>
export default ReactRouter.withRouter(Page<%- Name %>);
<% } else {%>
export default Page<%- Name %>;
<% } %>