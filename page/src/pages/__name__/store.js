import { Store } from 'reflux';
import Actions from './actions';

export default class <%- Name %>Store extends Store {
  constructor() {
    super();
    this.listenables = Actions;
    this.state = {};
  }

  static get id() {
    return '<%- Name %>Store';
  }
}
