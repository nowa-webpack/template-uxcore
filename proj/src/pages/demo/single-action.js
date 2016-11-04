import DB from '../../app/db';
// 可以把所有的`action`一起创建
// 也可以像`./multi-action.js`那样，分开创建
const User = window.Reflux.createActions({
  updateState: {
    // 这里可以修改传递的参数
    // 修改后传给`shouldEmit`
    preEmit(params) {
      const { workNo } = params;
      // 这里修改参数
      // 比如我们修改工号使其必须为数字
      if (workNo) {
        params.workNo = workNo.replace(/\D/g, '');
      }
      return params;
    },
    // 根据条件确定是否触发`Action`
    // 比如如果输入的
    shouldEmit(params) {
      // 根据返回确定是否触发
      return true;
    },
  },
  // 利用`asyncResult`实现异步操作
  search: {
    asyncResult: true,
  },
});

// 这里我们可以设置`Action`具体干什么
User.updateState.listen((params) => {
  // 这里返回一个`Promise`对象
  User.search(params);
});

// 可以直接这样设置异步`Action`
// 返回一个`Promise`对象
// `User.search.listenAndPromise(DB.SomeModuleAPI.getSomeInfo)`;
// 如果里面需要有一些操作，可以这么来做
User.search.listenAndPromise((params) => {
  const getSomeInfo = DB.SomeModuleAPI.getSomeInfo(params);
  return getSomeInfo;
});


// 可以在这里给异步`Action``completed`之后做别的事情
User.search.completed.listen(() => {
  console.log('User search completed!');
});

// 同样的，也可以在这里给异步`Action``failed`之后做别的事情
User.search.failed.listen(() => {
  console.log('User search failed!');
});

export default User;
