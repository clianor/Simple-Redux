import { createStore } from "simple-redux";

const store = createStore({
  value1: 0,
  value2: 10,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
