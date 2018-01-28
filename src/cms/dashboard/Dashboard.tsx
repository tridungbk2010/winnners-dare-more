import * as React from 'react';
import * as _ from 'lodash';
import { connect } from 'react-redux';
import { RootState } from '../../rootReducer';
import { Redirect } from 'react-router';
import { LoginState } from '../user/userModel';
import './Dashboard.scss';
import { Route } from 'react-router-dom';
import Sidebar from '../side-bar/Sidebar';
import VideosList from '../video/containers/VideosList';
import Header from '../header/Header';

interface AppProps {
  userInfo: LoginState;
}
interface State {
  showSidebar: boolean;
}
class Dashboard extends React.Component<AppProps, State> {
  state = {
    showSidebar: true,
  };

  onShowSideBar = () => {
    this.setState(prevState => ({ showSidebar: !prevState.showSidebar }));
  };

  render() {
    const { userInfo } = this.props;
    const isAuthenticated = !_.isEmpty(userInfo) && userInfo.token;
    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="dashboard-container">
        <Header
          onClick={this.onShowSideBar}
          isVisible={this.state.showSidebar}
        />
        <div className="main-container">
          <div
            className={`sidebar-container ${
              this.state.showSidebar ? 'show-menu' : ''
            }`}
          >
            <Sidebar />
          </div>
          <div className="main">
            <Route exact={true} path={'/admin'} component={VideosList} />
            <Route
              path={'/admin/approved'}
              component={() => <h3>Approved</h3>}
            />
            <Route path={'/admin/drafts'} component={() => <h3>Drafts</h3>} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  userInfo: state.userInfo,
});

export default connect(mapStateToProps, null)(Dashboard);
