import { Component } from 'reflux';
<% if (SPA) { %>
import { withRouter } from 'react-router';
<% } else { %>
import ReactDOM from 'react-dom';
<% } %>
<% if (i18n) { %>
import i18n from 'i18n';
<% } %>
import './PageDemo.less';
import Actions from './single-action';
import Store from './store';
import SearchWord from '../../components/search-word';
import SearchData from '../../components/search-data';

// 如果有`Action`和`Store`那么就使用`Reflux.Component`
// 这样可以用`Reflux`管理全部的`state`
// 在这里面改变`state`是不会生效的
// 否则，还是使用`React.Component`
class PageDemo extends Component {

  constructor(props) {
    super(props);
    // 通过`this.store`建立和`Store`的联系
    this.store = Store;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    Actions.updateState({ workNo: e.target.value });
  }

  render() {
    const { state: { content: { data }, workNo }, handleChange } = this;

    return (
      <div className="page-demo">
        <input className="kuma-input" onChange={handleChange} placeholder="请输入员工工号" />
        <SearchWord workNo={workNo} />
        <SearchData data={data} />
      </div>
    );
  }
}

<% if (SPA) { %>
export default withRouter(PageDemo); 
<% } else { %>
ReactDOM.render(<PageDemo/>, document.getElementById('App'));
<% } %>
