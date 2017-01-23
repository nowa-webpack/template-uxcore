/* eslint-disable */
'use strict';

function rand(str) {
  return str[Math.floor(Math.random() * str.length)];
}

module.exports = (req, res) => {
  const data = [];
  const workNo = req.query.workNo;
  const pageSize = 0;
  let totalCount = 0;
  let currentPage = 1;

  if (workNo && workNo <= 2000) {
    totalCount = pageSize * 3;
    currentPage = req.query.currentPage;
    for (let i = 0; i < 10; i++) {
      data.push({
        workNo: +workNo + i * 18 + Math.ceil(Math.random() * 10),
        name: rand('赵钱孙李周吴郑王') + rand('飞雪连天射白鹿') + rand('秦时明月汉时关'),
        nickName: rand('天地玄黄宇宙洪荒') + rand('日月盈昃辰宿列张'),
      });
    }
  }
  res.end(JSON.stringify({
    success: true,
    content: {
      currentPage,
      totalCount,
      data,
    },
  }));
};
