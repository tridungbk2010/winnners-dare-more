import { combineReducers } from 'redux';
import { CounterState } from './client/model/counterModel';
import counterReducer from './client/reducer/counterReducer';

export interface RootState {
  counter: CounterState;
}

export default combineReducers<RootState>({
  counter: counterReducer,
});
