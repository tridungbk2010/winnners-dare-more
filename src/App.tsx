import * as React from 'react';
import Client from './client/containers/home/Home';
import { Switch, Route } from 'react-router-dom';
import Login from './cms/containers/login/Login';
import Dashboard from './cms/containers/main/Dashboard';

const Video = () => <h3>Video</h3>;

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact={true} path="/" component={Client} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Dashboard} />
          <Route path="/admin/?page" component={Video} />
        </Switch>
      </div>
    );
  }
}

export default App;
