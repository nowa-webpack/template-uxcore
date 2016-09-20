require('./PageDemo.less');

const reactMixin = require('react-mixin');
<% if (i18n) { %>
const i18n = require('i18n');
<% } %>
const Actions = require('./actions');
const Store = require('./store');

const { Table } = Uxcore;

class PageDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            content: {},
            error: false
        };
    }

    componentDidMount() {
        Actions.fetch({
            workNo: '0001'
        }, function(data) {
            console.log(data);
        });
    }

    render() {
        let renderCell = (cellData, rowData) => {
            return <span>{cellData}</span>
        };
        let tableProps = {
            width: 900,
            jsxdata: {
                data: this.state.content.list
            },
            jsxcolumns: [
                {dataKey: 'workNo', title: '工号', width: 300, render: renderCell},
                {dataKey: 'name', title: '姓名', width: 300, render: renderCell},
                {dataKey: 'nickName', title: '昵称', width: 300, render: renderCell}
            ]
        };
        return (
            <div className="page-demo">
                <Table {...tableProps}/>
            </div>
        );
    }
}

reactMixin.onClass(PageDemo, Reflux.connect(Store, 'demo'));

ReactDOM.render(<PageDemo/>, document.getElementById('App'));

module.exports = PageDemo;
