import * as React from "react";
import { Store } from "./createStore";
import SimpleReduxContext from "./Context";

export interface ProviderProps {
  store: Store;
  children: React.ReactNode;
}

export function Provider({ store, children }: ProviderProps) {
  const contextValue = React.useMemo(() => {
    return { store };
  }, [store]);
  return React.createElement(
    SimpleReduxContext.Provider,
    { value: contextValue },
    children
  );
}
