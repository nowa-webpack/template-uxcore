// 除了`class`的声明方式，你还可以函数式声明组件
const SearchData = ({ data = [] }) => (
  <div className="mod-search-data">
    <div>
      <label>匹配的员工:</label>
      <div>
        {data.length ?
          data.map((l, k) => {
            return (<p key={k}>{`${l.workNo}-${l.name}(${l.nickName})`}</p>);
          }) :
          (<p>暂无数据</p>)
        }
      </div>
    </div>
  </div>
);

SearchData.propTypes = {
  data: React.PropTypes.array,
};

export default SearchData;
