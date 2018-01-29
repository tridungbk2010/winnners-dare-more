import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import {
  applyMiddleware,
  compose,
  createStore,
  GenericStoreEnhancer,
} from 'redux';
import rootReducer from './rootReducer';
export const history = createHistory();
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './rootEpic';
const epicMiddleware = createEpicMiddleware(rootEpic);
import { loadState, saveState } from './local-storage/localStorage';
import * as _ from 'lodash';

const ReduxExtentionComposeName: string =
  '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__';

export default function configureStore() {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [epicMiddleware, reactRouterMiddleware];

  const enhancers: GenericStoreEnhancer[] = [applyMiddleware(...middlewares)];

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window[ReduxExtentionComposeName]
      ? window[ReduxExtentionComposeName]
      : compose;

  const store = createStore(
    rootReducer,
    loadState(),
    composeEnhancers(...enhancers),
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

  if (module.hot && process.env.NODE_ENV !== 'production') {
    module.hot.accept('./rootReducer', () => {
      const nextReducer = require('./rootReducer').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
