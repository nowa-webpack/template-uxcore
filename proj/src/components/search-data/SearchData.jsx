import React, { PropTypes } from 'react';

// 除了`class`的声明方式，你还可以函数式声明组件
const SearchData = ({ data = [] }) => (
  <div className="mod-search-data">
    <div>
      <p><b>匹配的员工:</b></p>
      <div>
        {data.length ?
          data.map((l, k) => (<p key={k}>{`${l.workNo}-${l.name}(${l.nickName})`}</p>)) :
          (<p>暂无数据</p>)
        }
      </div>
    </div>
  </div>
);

SearchData.propTypes = {
  data: PropTypes.array,
};

export default SearchData;
