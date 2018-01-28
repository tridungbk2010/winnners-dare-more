import { combineReducers } from 'redux';
import loginReducer from './cms/user/userReducer';
import { reducer as formReducer } from 'redux-form';
import { LoginState } from './cms/user/userModel';
import { routerReducer, RouterState } from 'react-router-redux';

export interface RootState {
  userInfo: LoginState;
  routing: RouterState;
}

export default combineReducers<RootState>({
  userInfo: loginReducer,
  form: formReducer,
  routing: routerReducer,
});
