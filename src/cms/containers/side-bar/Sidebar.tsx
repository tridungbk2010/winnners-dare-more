import * as React from 'react';
import { NavLink } from 'react-router-dom';

class Sidebar extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div className="admin-side-bar">
        <ul>
          <li>
            <NavLink to="/" activeStyle={activeStyle}>
              Main
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeStyle={activeStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/video" activeStyle={activeStyle}>
              Video
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
