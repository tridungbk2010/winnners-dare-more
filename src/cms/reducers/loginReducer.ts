import { LoginState } from '../model/loginModel';
import {
  USER_LOGIN,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
  UserActions,
} from '../actions/userActions';

const initialState: LoginState = {
  userName: '',
  loading: false,
  token: '',
  error: '',
};

export default function(state: LoginState = initialState, action: UserActions) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.response,
      };
    case USER_LOGIN_FAILURE:
      return {
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
