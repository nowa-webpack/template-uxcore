import Actions from './actions';

const { Reflux } = window;
export default class <%- Name %>Store extends Reflux.Store {
  constructor() {
    super();
    this.listenables = Actions;
    this.state = {};
  }

  static get id() {
    return '<%- Name %>Store'
  }
}
