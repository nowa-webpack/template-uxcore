<% if (i18n) { %>
import i18n from 'i18n';
<% } %>
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './<%- Name %>.less';

const { React } = window;
class <%- Name %> extends React.Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    let me = this;
    return (
      <div className="mod-<%= name %>">
        component <%= name %>
      </div>
    );
  }
}


<%- Name %>.defaultProps ={

}

<%- Name %>.propTypes = {
  
}

export default <%- Name %>;