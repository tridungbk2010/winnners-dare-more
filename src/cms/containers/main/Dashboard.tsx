import * as React from 'react';
import Header from '../header/Header';

class Dashboard extends React.Component {
  render() {
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

export default Dashboard;
