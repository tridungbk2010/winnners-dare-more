import * as React from 'react';
import Client from './client/containers/home/Home';
import { Switch, Route } from 'react-router-dom';
import Login from './cms/containers/login/Login';
import Dashboard from './cms/containers/main/Dashboard';
import { RouteComponentProps } from 'react-router-dom';

const NotFound = () => <h3>Not found</h3>;

interface ParamPath {
  page: string;
}
const RenderChildPage = ({ match }: RouteComponentProps<ParamPath>) => {
  return <h3>{match.params.page}</h3>;
};

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={Client} />
        <Route path="/login" component={Login} />
        <Route exact={true} path="/admin" component={Dashboard} />
        <Route path="/admin/:page" component={RenderChildPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
