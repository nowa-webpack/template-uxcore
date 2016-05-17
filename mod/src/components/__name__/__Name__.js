require('./<%- Name %>.less');

class <%- Name %> extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let me = this;
        return (
            <div className="<%= name %>">
                component <%= name %>
            </div>
        );
    }
}

module.exports = <%- Name %>;
