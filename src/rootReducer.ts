import { combineReducers } from 'redux';
import loginReducer from './cms/user/userReducer';
import { reducer as formReducer } from 'redux-form';
import { LoginState } from './cms/user/userModel';
import { routerReducer, RouterState } from 'react-router-redux';
import { VideoState } from './cms/video/model';
import videoReducer from './cms/video/reducers';

export interface RootState {
  userInfo: LoginState;
  routing?: RouterState;
  video?: VideoState;
}

export default combineReducers<RootState>({
  userInfo: loginReducer,
  form: formReducer,
  routing: routerReducer,
  video: videoReducer,
});
