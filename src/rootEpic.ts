import { combineEpics } from 'redux-observable';
import { userEpic } from './cms/epics/userEpic';

export default combineEpics(userEpic);
