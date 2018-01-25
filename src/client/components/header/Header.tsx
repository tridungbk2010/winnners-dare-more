import * as React from 'react';
import SocialLink from '../social-link/SocialLink';
import './Header.scss';

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo" />
      <div className="nav">
        <a href="/">Upload Video</a>
        <a href="/">Watch Videos</a>
      </div>
      <div>
        <SocialLink />
      </div>
    </div>
  );
};

export default Header;
