require('./Page<%- Name %>.less');

const reactMixin = require('react-mixin');

const i18n = require('i18n');

const Actions = require('./actions');
const Store = require('./store');

class <%- Name %> extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        Actions.fetch({}, function(data) {
            console.log(data);
        });
    }

    render() {
        return (
            <div className="<%= name %>">
                page <%= name %>
            </div>
        );
    }

    componentWillMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
    }
}

reactMixin.onClass(<%- Name %>, Reflux.connect(Store));

ReactDOM.render(<<%- Name %>/>, document.getElementById('App'));

module.exports = <%- Name %>;
