import * as React from 'react';
import LogOutBtn from '../user/containers/LogOut';

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
