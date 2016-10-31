import DB from '../../app/db';

const Actions = Reflux.createActions({
  updateState: {},
  search: {
    asyncResult: true,
  },
});

Actions.updateState.listen((params) => {

});

Actions.search.listenAndPromise((params) => {
  const getSomeInfo = DB.SomeModuleAPI.getSomeInfo(params);
  return getSomeInfo;
});

export default Actions;
