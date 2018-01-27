import {
  USER_LOGIN,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
  UserActions,
  UserLogin,
} from '../actions/userActions';
import { ActionsObservable } from 'redux-observable';
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

export const userEpic = (
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
