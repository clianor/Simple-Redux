import { useSelector, useDispatch } from "simple-redux";
import { RootState } from "./store";
import { decrement, increment } from "./store/counter";

function DecrementButton() {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(decrement())}>-</button>;
}

function IncrementButton() {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(increment())}>+</button>;
}

function DisplayValue() {
  const value = useSelector((state: RootState) => state.counter);
  return <span>counter: {value}</span>;
}

function App() {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "1rem",
      }}
    >
      <DecrementButton />
      <DisplayValue />
      <IncrementButton />
    </div>
  );
}

export default App;
