import { useCallback, useContext } from "react";
import Context from "./Context";

export function useDispatch() {
  const context = useContext(Context);
  if (!context) {
    throw new Error(`You must pass a Provider to useDispatch`);
  }
  const { store } = context;

  const dispatch = useCallback(
    ({ type, payload }) => {
      const state = store.getState();
      const [stateKey, callback] = store.getReducerMap()[type];
      const currentState = state[stateKey];
      const newState = callback(currentState, payload);
      store.setState({ ...state, [stateKey]: newState });
    },
    [store]
  );

  return dispatch;
}
