import DB from '../../app/db';

const { Reflux } = window;
const updateState = Reflux.createAction({
  preEmit(params) {
    const { workNo } = params;
    if (workNo) {
      params.workNo = workNo.replace(/\D/g, '');
    }
    return params;
  },
  shouldEmit( params ) {
    return true;
  },
});

const search = Reflux.createAction({
  asyncResult: true,
});

updateState.listen((params) => {
  search(params);
});

search.listenAndPromise(DB.SomeModuleAPI.getSomeInfo);

export default { updateState, search };
