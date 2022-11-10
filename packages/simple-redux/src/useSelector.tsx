import { useContext, useSyncExternalStore } from "react";
import Context from "./Context";

export function useSelector<TState = unknown, Selected = unknown>(
  selector: (state: TState) => Selected
) {
  if (!selector) {
    throw new Error(`You must pass a selector to useSelector`);
  }

  const context = useContext(Context);
  if (!context) {
    throw new Error(`You must pass a Provider to useSelector`);
  }
  const { store } = context;

  return useSyncExternalStore(store.subscribe, () =>
    selector(store.getState() as any)
  );
}
