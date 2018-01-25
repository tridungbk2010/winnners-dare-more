import { CounterState } from '../model/counterModel';
import { CounterAction } from '../actions/counter';
import { DECREMENT, INCREMENT, INCREMENT_ASYNC } from '../actions/types';

const initialState: CounterState = {
  counter: 0,
  loading: false,
};

export default function(
  state: CounterState = initialState,
  action: CounterAction,
) {
  switch (action.type) {
    case INCREMENT_ASYNC:
      return {
        ...state,
        loading: true,
      };
    case INCREMENT:
      return { ...state, counter: state.counter + 1, loading: false };

    case DECREMENT:
      return { ...state, counter: state.counter - 1, loading: false };

    default:
      return state;
  }
}
