import { legacy_createStore as createStore, applyMiddleware } from "redux";

import reducer from "./reducer";

import createSagaMiddleware from "../redux-saga";

import rootSaga from "./sagas";

// 创建saga中间件
const sagaMiddleware = createSagaMiddleware();

const store = applyMiddleware(sagaMiddleware)(createStore)(reducer);

//开始运行saga
sagaMiddleware.run(rootSaga);

export default store;
