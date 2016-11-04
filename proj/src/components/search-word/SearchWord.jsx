import PureRenderMixin from 'react-addons-pure-render-mixin';

const { React } = window;
class SearchWord extends React.Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const { workNo } = this.props;
    return (
      <div className="mod-search-word">
        {
          workNo ?
            (<div>
              <label>检索词:</label>
              <div>{workNo}</div>
            </div>) : null
        }
      </div>
    );
  }
}


SearchWord.defaultProps = {
  workNo: '',
};

SearchWord.propTypes = {
  workNo: React.PropTypes.number,
};

export default SearchWord;
