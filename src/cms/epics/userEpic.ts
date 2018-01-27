import {
  USER_LOGIN,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_LOGOUT_FAILURE,
  USER_LOGOUT_SUCCESS,
  UserActions,
  UserLogin,
  UserLogout,
} from '../actions/userActions';
import { ActionsObservable, combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import { Action, Store } from 'redux';
import { LoginForm } from '../model/loginModel';
const uuidv4 = require('uuid/v4');
import { push } from 'react-router-redux';
import { startSubmit, stopSubmit } from 'redux-form';
import { RootState } from '../../rootReducer';

const mockUserApi = (params: LoginForm) =>
  new Promise((resolve, reject) => {
    if (params.email === 'admin' && params.password === '123') {
      resolve({
        token: uuidv4(),
      });
    } else {
      reject({
        message: 'Username or password is incorrect!',
      });
    }
  });

const mockLogOutApi = (token: string) =>
  new Promise((resolve, reject) => {
    if (token) {
      resolve({
        status: 200,
      });
    } else {
      reject({
        message: 'Can not log out!',
      });
    }
  });

const loginEpic = (
  action$: ActionsObservable<UserActions>,
  store: Store<RootState>,
): Observable<Action> =>
  action$
    .ofType(USER_LOGIN)
    .do(() => store.dispatch(startSubmit('loginForm')))
    .delay(1000)
    .mergeMap((action: UserLogin) =>
      Observable.fromPromise(mockUserApi(action.payload))
        .map(res => ({ type: USER_LOGIN_SUCCESS, response: res }))
        .do(() => {
          store.dispatch(stopSubmit('loginForm', {}));
          store.dispatch(push('/admin'));
        })
        .catch(err => {
          store.dispatch(stopSubmit('loginForm', { _error: err.message }));
          return Observable.of({
            type: USER_LOGIN_FAILURE,
            error: err.message,
          });
        }),
    );

const logOutEpic = (
  action$: ActionsObservable<UserActions>,
  store: Store<RootState>,
): Observable<Action> =>
  action$
    .ofType(USER_LOGOUT)
    .delay(1000)
    .mergeMap((action: UserLogout) =>
      Observable.fromPromise(mockLogOutApi(action.token))
        .map(res => ({ type: USER_LOGOUT_SUCCESS, response: res }))
        .do(() => {
          store.dispatch(push('/login'));
        })
        .catch(err => {
          return Observable.of({
            type: USER_LOGOUT_FAILURE,
            error: err.message,
          });
        }),
    );

export default combineEpics(logOutEpic, loginEpic);
