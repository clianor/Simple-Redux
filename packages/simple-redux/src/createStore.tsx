export interface StoreOptions {
  reducer: {
    [key: string]: ReducerWithInitialState<any>;
  };
}

export interface Action<Payload = undefined> {
  type: string;
  payload: Payload;
}
export type Reducer<State = any> = (
  state: State | undefined,
  action: Action<any>
) => State;

export type ReducerWithInitialState<State = any> = (() => {
  [key: string]: Reducer;
}) & {
  getInitialState: () => State;
};

export function createStore(options: StoreOptions) {
  let currentState = Object.entries(options.reducer).reduce(
    (acc, [key, reducer]) => {
      return {
        ...acc,
        [key]: reducer.getInitialState(),
      };
    },
    {} as any
  );

  const reducerMap = Object.entries(options.reducer).reduce(
    (acc, [key, reducer]) => {
      return {
        ...acc,
        ...Object.entries(reducer()).reduce((acc, [action, callback]) => {
          acc[action] = [key, callback];
          return acc;
        }, {} as any),
      };
    },
    {}
  );

  const listeners = new Set<any>();
  return {
    getReducerMap(): any {
      return reducerMap;
    },
    getState(): any {
      return currentState;
    },
    setState(newState: any): void {
      currentState = newState;
      listeners.forEach((listener) => listener(currentState));
    },
    subscribe(listener: any): () => boolean {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

export type Store = ReturnType<typeof createStore>;
