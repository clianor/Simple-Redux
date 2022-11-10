import { Action } from "./createStore";

export function createAction<Payload = undefined>(type: string) {
  function actionCreator(payload?: Payload) {
    return { type, payload };
  }

  actionCreator.toString = () => `${type}`;
  actionCreator.type = type;
  actionCreator.match = (action: Action<unknown>): action is Action =>
    action.type === type;

  return actionCreator;
}
