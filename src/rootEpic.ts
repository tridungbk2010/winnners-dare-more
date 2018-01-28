import { combineEpics } from 'redux-observable';
import userEpic from './cms/user/userEpic';
import videoEpic from './cms/video/epics';

export default combineEpics(userEpic, videoEpic);
