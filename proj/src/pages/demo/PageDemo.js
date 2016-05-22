require('./PageDemo.less');

var reactMixin = require('react-mixin');

let i18n = require('i18n');

let Actions = require('./actions');
let Store = require('./store');

class PageDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        let me = this;
        Actions.fetch({}, function(data) {
            console.log(data);
        });
    }

    render() {
        let me = this;
        return (
            <div className="page-demo">
                demo{i18n('page1.demo')}
            </div>
        );
    }
}

reactMixin.onClass(PageDemo, Reflux.connect(Store));

ReactDOM.render(<PageDemo/>, document.getElementById('App'));

module.exports = PageDemo;
