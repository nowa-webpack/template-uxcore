import './PageHome.less';
import { URLS } from '../../app/variables';

const { React, <% if (SPA) { %>ReactRouter<% } else { %>ReactDOM<% } %> } = window;
const Table = require('uxcore/lib/Table');

// 如果有`Action`和`Store`那么就使用`Reflux.Component`
// 这样可以用`Reflux`管理全部的`state`
// 在这里面改变`state`是不会生效的
// 否则，还是使用`React.Component`
// 更多用法请看PageDemo.js文件
class PageHome extends React.Component {

  render() {
    const renderCell = cellData => (<span>{cellData}</span>);
    const tableProps = {
      width: 900,
      showSearch: true,
      fetchUrl: URLS.getSomeInfo,
      beforeFetch(data) {
        const { currentPage, pageSize, searchTxt } = data;
        return {
          currentPage,
          pageSize,
          workNo: parseInt(searchTxt, 10) || 0,
        };
      },
      searchBarPlaceholder: '请输入员工工号',
      emptyText: '没有查到符合条件的信息',
      jsxcolumns: [
        { dataKey: 'workNo', title: '工号', width: 300, render: renderCell },
        { dataKey: 'name', title: '姓名', width: 300, render: renderCell },
        { dataKey: 'nickName', title: '花名', width: 300, render: renderCell },
      ],
    };
    return (
      <div className="page-home">
        <Table {...tableProps} />
      </div>
    );
  }
}

<% if (SPA) { %>
export default ReactRouter.withRouter(PageHome); 
<% } else { %>
ReactDOM.render(<PageHome />, document.getElementById('App'));
export default PageHome; 
<% } %>

