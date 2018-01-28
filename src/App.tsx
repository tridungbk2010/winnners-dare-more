import * as React from 'react';
import Client from './client/containers/home/Home';
import { Switch, Route } from 'react-router-dom';
import Login from './cms/user/containers/Login';
import Dashboard from './cms/dashboard/Dashboard';

const App = () => {
  return (
    <div className="app">
      <div className="app-component">
        <Switch>
          <Route exact={true} path="/" component={Client} />
          <Route path="/login" component={Login} />
          <Route render={props => <Dashboard {...props} />} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
