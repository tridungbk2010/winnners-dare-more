import { combineEpics } from 'redux-observable';
import userEpic from './cms/user/userEpic';

export default combineEpics(userEpic);
