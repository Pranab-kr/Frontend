type IncrementAction = {
  type: "increment";
};
type DecrementAction = {
  type: "decrement";
};
export type CounterAction = IncrementAction | DecrementAction;

export type CounterState = {
  count: number;
};

export const counterReducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
