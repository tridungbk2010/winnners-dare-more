import { combineReducers } from 'redux';
import { CounterState } from './client/model/counterModel';
import counterReducer from './client/reducer/counterReducer';
import { reducer as formReducer } from 'redux-form';

export interface RootState {
  counter: CounterState;
}

export default combineReducers<RootState>({
  counter: counterReducer,
  form: formReducer,
});
