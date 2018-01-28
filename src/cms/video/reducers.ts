import { VideoState } from './model';
import * as videoActions from './actions';
import {
  GET_ALL_VIDEOS,
  GET_ALL_VIDEOS_FAILURE,
  GET_ALL_VIDEOS_SUCCESS,
} from './actions';

const initialState: VideoState = {
  loading: false,
  videos: [],
};

export default function(
  state: VideoState = initialState,
  action: videoActions.Actions,
) {
  switch (action.type) {
    case GET_ALL_VIDEOS:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: action.response,
        loading: false,
      };
    case GET_ALL_VIDEOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
