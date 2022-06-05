import { increment, decrement } from "./Redux/Action";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

function App() {
  const count = useSelector((state) => state);
  console.log(count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div className="App">
      <button onClick={handleIncrement}>+</button>
      <h1> {count} </h1>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default App;
