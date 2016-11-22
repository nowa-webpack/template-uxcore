const { React } = window;
class SearchWord extends React.Component {

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


SearchWord.defaultProps = {
  workNo: '',
};

SearchWord.propTypes = {
  workNo: React.PropTypes.number,
};

export default SearchWord;
