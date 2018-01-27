import { LoginForm, LoginState } from '../model/loginModel';

export const USER_LOGIN = 'user_login';
export type USER_LOGIN = typeof USER_LOGIN;
export const USER_LOGIN_SUCCESS = 'user_login_success';
export type USER_LOGIN_SUCCESS = typeof USER_LOGIN_SUCCESS;
export const USER_LOGIN_FAILURE = 'user_login_failure';
export type USER_LOGIN_FAILURE = typeof USER_LOGIN_FAILURE;

export interface UserLogin {
  type: USER_LOGIN;
  payload: LoginForm;
}

export interface UserLoginSuccess {
  type: USER_LOGIN_SUCCESS;
  response: LoginState;
}

export interface UserLoginFailure {
  type: USER_LOGIN_FAILURE;
  error: string;
}

export type UserActions = UserLogin | UserLoginSuccess | UserLoginFailure;

export const login = (payload: LoginForm): UserActions => ({
  type: USER_LOGIN,
  payload,
});
