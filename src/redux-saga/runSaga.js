import { effectTypes } from "redux-saga/effects";

function runSaga(env, saga, callback) {
  const task = { cancel: () => next("CANCEL_TASK") };

  const { channel, dispatch } = env;

  let it = typeof saga === "function" ? saga() : saga;

  function next(value, isError) {
    let result;
    if (isError) {
      result = it.throw(value);
    } else if (value === "CANCEL_TASK") {
      //提前返回结束当前的saga
      result = it.return(value);
    } else {
      result = it.next(value);
    }
    let { value: effect, done } = result;
    if (!done) {
      //如果产出的是一个普通的迭代器，那就不会直接调用next
      if (typeof effect[Symbol.iterator] === "function") {
        //需要等当前的effect结束之后继续调用当前的saga的next
        runSaga(env, effect, next);
      } else if (effect instanceof Promise) {
        effect.then(next);
      } else {
        switch (
          effect.type //判断指令的类型
        ) {
          case effectTypes.TAKE:
            channel.once(effect.actionType, next);
            break;
          case effectTypes.PUT:
            dispatch(effect.action);
            next();
            break;
          case effectTypes.FORK:
            //如果产出的是fork，开启一个新的子进行运行子saga,不管运行结束没有
            const forkTask = runSaga(env, effect.saga);
            //都会直接调用next
            next(forkTask);
            break;
          case effectTypes.CALL:
            effect.fn(...effect.args).then(next);
            break;
          case effectTypes.CPS:
            effect.fn(...effect.args, (err, data) => {
              if (err) {
                next(err, true);
              } else {
                next(data);
              }
            });
            break;
          case effectTypes.ALL:
            const { iterators } = effect;
            let results = [];
            let count = 0;
            iterators.forEach((iterator, index) => {
              runSaga(env, iterator, (result) => {
                results[index] = result;
                if (++count === iterators.length) {
                  next(results);
                }
              });
            });
            break;
          case effectTypes.CANCEL:
            effect.task.cancel(); //取消对应的saga
            next(); //继续执行当前的saga
            break;
          default:
            break;
        }
      }
    } else {
      callback && callback(effect);
    }
  }

  next();
  
  return task;
}

export default runSaga;
