import { combineReducers } from 'redux';
import loginReducer from './cms/reducers/loginReducer';
import { reducer as formReducer } from 'redux-form';
import { LoginState } from './cms/model/loginModel';
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
