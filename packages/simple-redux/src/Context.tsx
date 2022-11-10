import { createContext } from "react";
import { Store } from "./createStore";

export interface ContextValues {
  store: Store;
}

const SimpleReduxContext = createContext<ContextValues | null>(null);

export default SimpleReduxContext;
