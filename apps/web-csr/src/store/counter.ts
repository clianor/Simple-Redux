import { createAction, createReducer } from "simple-redux";

export const increment = createAction<number | undefined>("counter/increment");
export const decrement = createAction<number | undefined>("counter/decrement");

export const counterReducer = createReducer(0, {
  [increment.toString()]: (state) => state + 1,
  [decrement.toString()]: (state) => state - 1,
});
