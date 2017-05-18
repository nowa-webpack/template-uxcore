import { assign } from 'lodash';

export default {
  // defaults 返回一个对象，用于初始化页面state
  defaults() {
    return {
      empty: true,
      loading: false,
      workNo: '',
    };
  },
  // 通过execute调用的方法
  // 其第一个参数会被设置为 ctx,
  // 它原生带了 setState/getState/getProps 三个方法
  // 和用户定义的 fn
  // fn 上挂在了在app.js中定义的 dialog 和 message、DB
  updateState(ctx, data) {
    ctx.setState(data);
    // 如果返回 false，就不会执行下面的了
    // return false;
    return data;
  },

  // 前面的参数fromExec是从 execute 的时候传过来的
  // 如果updateState有返回值
  // 则后面参数就是从fromUpdateState传过来的
  async search(ctx, fromExec = {}, fromUpdateState) {
    const { setState, fn: { message, DB } } = ctx;
    setState({ loading: true });
    let state = {};

    try {
      const users = await DB.User.query(fromUpdateState);

      const empty = !users.data.length;

      if (empty) {
        message.info(`${fromExec.workNo}查无数据！`);
      } else {
        message.success(`${fromExec.workNo}请求成功！`);
      }

      state = assign(users, { empty });
    } catch (e) {
      message.error(`${fromExec.workNo}请求出错啦！`);
      state = { users: [], empty: false };
    }

    setState(assign(state, { loading: false }));
  },
};
