export function createStore<State>(initState: State) {
  let currentState = initState;
  const listeners = new Set<any>();
  return {
    getState(): State {
      return currentState;
    },
    setState(newState: State): void {
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
