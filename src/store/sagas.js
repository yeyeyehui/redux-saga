import * as actionTypes from "./action-types";

import {
  put,
  takeEvery,
  take,
  fork,
  call,
  cps,
  all,
  cancel,
} from "../redux-saga/effects";

const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

function* add() {
  while (true) {
    yield delay(1000);
    yield put({ type: actionTypes.ADD });
  }
}

function* addWatcher() {
  const task = yield fork(add);
  yield take(actionTypes.STOP);
  yield cancel(task);
  console.log("next Watcher");
}

function* rootSaga() {
  yield addWatcher();
}

export default rootSaga;
