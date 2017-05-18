import { Component, LogicRender } from 'no-flux';<% if (SPA) { %>
import { withRouter } from 'react-router';<% } else { %>
import { render } from 'react-dom';<% } %><% if (i18n) { %>
import i18n from 'i18n';<% } %>
import SearchWord from 'components/search-word';
import SearchData from 'components/search-data';
import './PageDemo.less';
import logic from './logic';

class PageDemo extends Component {

  constructor(props) {
    super(props, logic);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.execute('updateState', { workNo: e.target.value });
  }

  render() {
    const {
      state: { data, workNo, empty },
      handleChange,
    } = this;
    return (
      <div className="page-demo">
        <input
          className="kuma-input"
          onChange={handleChange}
          placeholder="请输入员工工号"
          value={workNo}
        />
        <SearchWord workNo={workNo} />
        <LogicRender empty={empty} awareOf={{ workNo }} action="search">
          <SearchData data={data} />
        </LogicRender>
      </div>
    );
  }
}<% if (SPA) { %>
export default withRouter(PageDemo);<% } else { %>
render(<PageDemo />, document.getElementById('App'));<% } %>


