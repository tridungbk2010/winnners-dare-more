import { combineEpics } from 'redux-observable';
import { counterEpic } from './client/epics/counterEpic';

export default combineEpics(counterEpic);
