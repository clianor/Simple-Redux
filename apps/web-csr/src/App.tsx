import { useSelector, useDispatch } from "simple-redux";
import { RootState } from "./store";

interface Props {
  item: keyof RootState;
}

function DecrementButton({ item }: Props) {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(item, (state: RootState) => state[item] - 1);
      }}
    >
      -
    </button>
  );
}

function IncrementButton({ item }: Props) {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(item, (state: RootState) => state[item] + 1);
      }}
    >
      +
    </button>
  );
}

function DisplayValue({ item }: Props) {
  const value = useSelector((state: RootState) => state[item]);
  return (
    <span>
      {item}: {value}
    </span>
  );
}

function App() {
  return (
    <div>
      <div>
        <DecrementButton item="value1" />
        <DisplayValue item="value1" />
        <IncrementButton item="value1" />
      </div>
      <div>
        <DecrementButton item="value2" />
        <DisplayValue item="value2" />
        <IncrementButton item="value2" />
      </div>
    </div>
  );
}

export default App;
