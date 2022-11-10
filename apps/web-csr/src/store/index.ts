import { createStore } from "simple-redux";
import { counterReducer } from "./counter";

const store = createStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
