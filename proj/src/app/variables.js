// 这里放置全局的变量
const urlPrefix = __LOCAL__ ? '/mock/' : '/';

export default {
  urlPrefix,
    // 这里放置全局的调用的URL
  URLS: {
    getSomeInfo: `${urlPrefix}query/getSomeInfo.json`,
  },
};
