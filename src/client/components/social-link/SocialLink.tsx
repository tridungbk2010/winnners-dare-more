import * as React from 'react';
import { Link } from 'react-router-dom';
import './SocialLink.scss';

const SocialLink = () => {
  return (
    <div className="social-link-container">
      <span>
        <Link to="facebook">
          <i className="fab fa-facebook-f" />
        </Link>
      </span>
      <span>
        <Link to="twitter">
          <i className="fab fa-twitter" />
        </Link>
      </span>
      <span>
        <Link to="instagram">
          <i className="fab fa-instagram" />
        </Link>
      </span>
      <span>
        <Link to="email">
          <i className="far fa-envelope" />
        </Link>
      </span>
    </div>
  );
};

export default SocialLink;
