import { useSelector, useDispatch } from "react-redux";

import * as actionTypes from "../store/action-types";

function Counter() {
  const number = useSelector((state) => state.number);

  const dispatch = useDispatch();
  return (
    <div>
      <p>{number}</p>
      {/* 同步添加 */}
      <button onClick={() => dispatch({ type: actionTypes.ADD })}>+</button>

      {/* 异步添加 */}
      <button onClick={() => dispatch({ type: actionTypes.ASYNC_ADD })}>
        async+
      </button>

      {/* 停止异步 */}
      <button onClick={() => dispatch({ type: actionTypes.STOP })}>stop</button>
    </div>
  );
}
export default Counter;
