import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './rootReducer';
export const history = createHistory();
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './rootEpic';
const epicMiddleware = createEpicMiddleware(rootEpic);
import { loadState, saveState } from './local-storage/localStorage';
import * as _ from 'lodash';

function configureStoreProd() {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [epicMiddleware, reactRouterMiddleware];
  const store = createStore(
    rootReducer,
    loadState(),
    compose(applyMiddleware(...middlewares)),
  );
  store.subscribe(
    _.throttle(
      () =>
        saveState({
          userInfo: store.getState().userInfo,
        }),
      1000,
    ),
  );

  return store;
}

function configureStoreDev() {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [epicMiddleware, reactRouterMiddleware];
  const store = createStore(
    rootReducer,
    loadState(),
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
  store.subscribe(
    _.throttle(
      () =>
        saveState({
          userInfo: store.getState().userInfo,
        }),
      1000,
    ),
  );

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextReducer = require('./rootReducer').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

const configureStore =
  process.env.NODE_ENV === 'production'
    ? configureStoreProd
    : configureStoreDev;

export default configureStore;
