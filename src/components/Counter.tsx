import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/actions/counterActions";

const Counter: React.FC = () => {
  const counter = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
    </div>
  );
};

export default Counter;
