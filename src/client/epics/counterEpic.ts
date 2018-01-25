import { Observable } from 'rxjs';
import { INCREMENT, INCREMENT_ASYNC } from '../actions/types';
import { ActionsObservable } from 'redux-observable';
import { Action } from 'redux';
import { CounterAction } from '../actions/counter';
import { push } from 'react-router-redux';

export const counterEpic = (
  action$: ActionsObservable<CounterAction>,
): Observable<Action> =>
  action$
    .ofType(INCREMENT_ASYNC)
    .throttleTime(1000)
    .delay(1000)
    .mergeMap(() => Observable.of({ type: INCREMENT }, push('/login')));
