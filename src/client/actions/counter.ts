import { DECREMENT, INCREMENT, INCREMENT_ASYNC } from './types';

export interface Increment {
  type: INCREMENT;
}

export interface IncrementAsync {
  type: INCREMENT_ASYNC;
}

export interface Decrement {
  type: DECREMENT;
}

export type CounterAction = Increment | Decrement | IncrementAsync;

export const increment = (): Increment => ({ type: INCREMENT });
export const incrementAsync = (): IncrementAsync => ({ type: INCREMENT_ASYNC });
export const decrement = (): Decrement => ({ type: DECREMENT });
