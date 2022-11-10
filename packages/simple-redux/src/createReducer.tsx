import { Reducer, ReducerWithInitialState } from "./createStore";

export function createReducer<
  State,
  ActionsMap extends { [key: string]: Reducer }
>(initState: State, actionsMap: ActionsMap) {
  const getInitialState = () => initState;

  function reducer(): ActionsMap {
    return actionsMap;
  }

  reducer.getInitialState = getInitialState;

  return reducer as ReducerWithInitialState;
}
