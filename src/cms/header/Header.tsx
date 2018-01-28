import * as React from 'react';
import LogOutBtn from '../user/containers/Logout';

class Header extends React.Component {
  render() {
    return (
      <div>
        <h3>Header</h3>
        <LogOutBtn />
      </div>
    );
  }
}

export default Header;
