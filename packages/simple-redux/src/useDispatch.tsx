import { useCallback, useContext } from "react";
import Context from "./Context";

export function useDispatch() {
  const context = useContext(Context);
  if (!context) {
    throw new Error(`You must pass a Provider to useDispatch`);
  }
  const { store } = context;

  const dispatch = useCallback(
    <Key extends string, Payload extends unknown>(
      key: Key,
      payload: Payload
    ) => {
      const state = store.getState() as any;
      store.setState({
        ...state,
        [key]: typeof payload === "function" ? payload(state) : payload,
      });
    },
    [store]
  );

  return dispatch;
}
