import { createActions } from 'reflux';
import DB from '../../app/db';

// 可以把所有的`action`一起创建
// actions可以一起创建
// 也可以创建成不同的多个
// 可以参考 `single-action.js`和`multi-actions.js`中的示例
// 详细文档请参考 https://github.com/reflux/refluxjs
const User = createActions({
  updateState: {},
  // 利用`asyncResult`实现异步操作
  search: {
    asyncResult: true,
  },
});

// 这里我们可以设置`Action`具体干什么
User.updateState.listen(params => User.search(params));

User.search.listenAndPromise(DB.SomeModuleAPI.getSomeInfo);

export default User;
