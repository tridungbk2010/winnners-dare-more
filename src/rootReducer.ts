import { combineReducers } from 'redux';
import loginReducer from './cms/reducers/loginReducer';
import { reducer as formReducer } from 'redux-form';
import { LoginState } from './cms/model/loginModel';

export interface RootState {
  userInfo: LoginState;
}

export default combineReducers<RootState>({
  userInfo: loginReducer,
  form: formReducer,
});
