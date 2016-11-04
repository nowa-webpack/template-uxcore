import classnames from 'classnames';
<% if (i18n) { %>
import i18n from 'i18n';
<% } %>
import './PageDemo.less';
import Actions from './single-action';
import Store from './store';
import SearchWord from '../../components/search-word';
import SearchData from '../../components/search-data';

cosnt { React, <% if (SPA) { %>ReactRouter<% } else { %>ReactDOM<% } %> } = window;
//如果有`Action`和`Store`那么就使用`Reflux.Component`
//这样可以用`Reflux`管理全部的`state`
//在这里面改变`state`是不会生效的
//否则，还是使用`React.Component`
class PageDemo extends Reflux.Component {

  constructor(props) {
    super(props);
    //通过`this.store`建立和`Store`的联系
    this.store = Store;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    Actions.updateState({workNo: e.target.value});
  }

  render() {
    let me = this;
    let {info, content: {data}, workNo} = me.state;

    return (
      <div className="page-demo">
        <input className="kuma-input" onChange={me.handleChange} placeholder="请输入员工工号" />
        <SearchWord workNo={workNo}/>
        <SearchData data={data}/>
      </div>
    );
  }
}

<% if (SPA) { %>
export default ReactRouter.withRouter(PageDemo); 
<% } else { %>
ReactDOM.render(<PageDemo/>, document.getElementById('App'));
export default PageDemo; 
<% } %>
