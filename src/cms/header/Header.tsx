import * as React from 'react';
import LogOutBtn from '../user/containers/Logout';
import './Header.scss';

interface Props {
  onClick?: () => void;
  isVisible?: boolean;
}
const Header = ({ onClick, isVisible }: Props) => {
  return (
    <nav className="nav-bar">
      <div className="icon" onClick={onClick}>
        {isVisible ? (
          <i className="fas fa-arrow-left" />
        ) : (
          <i className="fa fa-bars" />
        )} Menu
      </div>
      <div className="logo" />
      <div className="form-inline">
        <LogOutBtn />
      </div>
    </nav>
  );
};

export default Header;
