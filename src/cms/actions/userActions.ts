import { LoginForm, LoginState, UserState } from '../model/loginModel';

export const USER_LOGIN = 'user_login';
export type USER_LOGIN = typeof USER_LOGIN;
export const USER_LOGIN_SUCCESS = 'user_login_success';
export type USER_LOGIN_SUCCESS = typeof USER_LOGIN_SUCCESS;
export const USER_LOGIN_FAILURE = 'user_login_failure';
export type USER_LOGIN_FAILURE = typeof USER_LOGIN_FAILURE;

export const USER_LOGOUT = 'user_logout';
export type USER_LOGOUT = typeof USER_LOGOUT;

export const USER_LOGOUT_SUCCESS = 'user_logout_success';
export type USER_LOGOUT_SUCCESS = typeof USER_LOGOUT_SUCCESS;

export const USER_LOGOUT_FAILURE = 'user_logout_failure';
export type USER_LOGOUT_FAILURE = typeof USER_LOGOUT_FAILURE;

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

export interface UserLogout {
  type: USER_LOGOUT;
  token: string;
}

export interface UserLogoutSuccess {
  type: USER_LOGOUT_SUCCESS;
  response: UserState;
}

export interface UserLogoutFailure {
  type: USER_LOGOUT_FAILURE;
  error: string;
}

export type UserActions =
  | UserLogin
  | UserLoginSuccess
  | UserLoginFailure
  | UserLogout
  | UserLogoutSuccess
  | UserLogoutFailure;

export const login = (payload: LoginForm): UserActions => ({
  type: USER_LOGIN,
  payload,
});

export const logOut = (token: string): UserActions => ({
  type: USER_LOGOUT,
  token,
});
