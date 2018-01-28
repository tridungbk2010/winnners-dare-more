import * as React from 'react';
import Header from '../header/Header';
import * as _ from 'lodash';
import { connect } from 'react-redux';
import { RootState } from '../../rootReducer';
import { Redirect } from 'react-router';
import { LoginState } from '../user/userModel';
import './Dashboard.scss';

interface AppProps {
  userInfo: LoginState;
}

class Dashboard extends React.Component<AppProps, Object> {
  render() {
    const { userInfo } = this.props;
    const isAuthenticated = !_.isEmpty(userInfo) && userInfo.token;
    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="app-container">
        <div>
          <Header />
        </div>
        <div className="main">
          <h3>Dashboard</h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  userInfo: state.userInfo,
});

export default connect(mapStateToProps, null)(Dashboard);
