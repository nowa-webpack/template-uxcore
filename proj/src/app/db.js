import { urlPrefix } from './variables';

// See https://github.com/Jias/natty-fetch for more details.
const DBContext = new NattyDB.Context({
  mockUrlPrefix: urlPrefix,
  urlPrefix,
  mock: __LOCAL__,
  // jsonp: true,
  withCredentials: false,
  traditional: true,
  data: {
    _tb_token_: '',
  },
  timeout: 5000,
  fit (response) {
    return {
      success: response.success,
      content: response.content,
      error: {
        errorMsg: response.errorMsg,
        errorCode: response.errorCode,
        errorLevel: response.errorLevel,
      },
    };
  },
});

DBContext.create('SomeModuleAPI', {
  // 这里可以通过`abc.json`设置模拟数据
  getSomeInfo: {
    mockUrl: 'query/getSomeInfo.json',
    url: 'query/getSomeInfo.json',
  },
});

export default DBContext;
