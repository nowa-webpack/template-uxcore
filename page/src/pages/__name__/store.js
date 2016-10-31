import Actions from './actions';

export default class <%- Name %>Store extends Reflux.Store {
  constructor() {
    super();
    this.listenables = Actions;
    this.state = {};
  }

  onUpdateState(obj) {
    this.setState(obj);
  }

  onSearch(content) {
  }

  onSearchCompleted(content) {
    this.setState({ content });
  }

  onSearchFailed(error) {
    this.setState({ error });
  }

  static get id() {
    return '<%- Name %>Store'
  }
}
