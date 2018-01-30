import * as React from 'react';
import LogOutBtn from '../user/containers/Logout';
import './Header.scss';
import { Icon } from 'antd';

interface Props {
  onClick?: () => void;
  isVisible?: boolean;
}
const Header = ({ onClick, isVisible }: Props) => {
  return (
    <nav className="nav-bar">
      <div className="icon" onClick={onClick}>
        {isVisible ? (
          <Icon type="menu-fold" style={{ fontSize: 16 }} />
        ) : (
          <Icon type="menu-unfold" style={{ fontSize: 16 }} />
        )}{' '}
        Menu
      </div>
      <div className="logo" />
      <div className="form-inline">
        <LogOutBtn />
      </div>
    </nav>
  );
};

export default Header;
