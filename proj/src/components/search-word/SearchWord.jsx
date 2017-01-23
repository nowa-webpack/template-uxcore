import React, { Component, PropTypes } from 'react';

export default class SearchWord extends Component {
  static defaultProps = {
    workNo: 112497,
  }

  static propTypes = {
    workNo: PropTypes.number,
  }
  render() {
    const { workNo } = this.props;
    return (
      <div className="mod-search-word">
        {
          workNo ?
            (<div>
              <h3>检索词:</h3>
              <div>{workNo}</div>
            </div>) : null
        }
      </div>
    );
  }
}
