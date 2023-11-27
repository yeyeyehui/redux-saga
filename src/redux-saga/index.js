import runSaga from "./runSaga";

import EventEmitter from "events";

function createSagaMiddleware() {
  const channel = new EventEmitter();

  let boundRunSaga;

  function sagaMiddleware({ getState, dispatch }) {
    // 修改this指向，给boundRunSaga赋方法
    boundRunSaga = runSaga.bind(null, { channel, getState, dispatch });
    // 中间件
    return function (next) {
      return function (action) {
        //store.dispatch reducer
        const result = next(action);
        //中间件在干啥？是有人向仓库派发动作话，它能监听到，然后向事件发射器发射事件
        channel.emit(action.type, action);
        return result;
      };
    };
    //var result = next(action); // hit reducers
    //channel.put(action);
  }

  sagaMiddleware.run = (saga) => boundRunSaga(saga);

  return sagaMiddleware;
}

export default createSagaMiddleware;
