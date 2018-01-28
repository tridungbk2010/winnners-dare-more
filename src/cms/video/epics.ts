import { ActionsObservable, combineEpics } from 'redux-observable';
import * as videoActions from './actions';
import { Observable } from 'rxjs/Observable';
import { Action } from 'redux';
import {
  GET_ALL_VIDEOS,
  GET_ALL_VIDEOS_FAILURE,
  GET_ALL_VIDEOS_SUCCESS,
} from './actions';
import { VideosListFake } from './model';

const getVideosListMock = (token: string) =>
  new Promise(resolve => resolve(VideosListFake));

const videosListEpic = (
  action$: ActionsObservable<videoActions.Actions>,
): Observable<Action> =>
  action$
    .ofType(GET_ALL_VIDEOS)
    .delay(2000)
    .mergeMap((action: videoActions.GetAllVideos) =>
      Observable.fromPromise(getVideosListMock(action.token))
        .map(res => ({ type: GET_ALL_VIDEOS_SUCCESS, response: res }))
        .catch(err =>
          Observable.of({
            type: GET_ALL_VIDEOS_FAILURE,
            error: 'get video failure',
          }),
        ),
    );

export default combineEpics(videosListEpic);
