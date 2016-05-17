var Actions = require('./actions');

var Store = Reflux.createStore({
    listenables: [Actions],
    data: {
        loaded: false
    },

    onFetch: function(params, cb) {
        var t = this;
        setTimeout(function() {
            t.data.loaded = true;
            t.updateComponent();
            cb && cb(t.data);
        }, 0);
    },

    updateComponent: function() {
        this.trigger(this.data);
    },

    getInitialState: function() {
        return this.data;
    }
});

module.exports = Store;