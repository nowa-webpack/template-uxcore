require('./Page<%- Name %>.less');

var reactMixin = require('react-mixin');

let i18n = require('i18n');

let Actions = require('./actions');
let Store = require('./store');

class <%- Name %> extends React.Component {

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
