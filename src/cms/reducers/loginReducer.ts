import { LoginState } from '../model/loginModel';
import {
  USER_LOGIN,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_LOGOUT_FAILURE,
  USER_LOGOUT_SUCCESS,
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
        token: action.response.token,
      };
    case USER_LOGIN_FAILURE:
      return {
        loading: false,
        error: action.error,
      };

    case USER_LOGOUT:
      return {
        loading: true,
      };

    case USER_LOGOUT_SUCCESS:
      return {
        loading: false,
        status: action.response.status,
      };
    case USER_LOGOUT_FAILURE:
      return {
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
