import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import 'rxjs';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import configureStore, { history } from './configureStore';
const store = configureStore();
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
// import './style/fontawesome/css/fontawesome-all.min.css';
import './custom-font/font.scss';
// import '../node_modules/materialize-css/dist/css/materialize.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
