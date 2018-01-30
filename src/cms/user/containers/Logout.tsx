import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import * as actions from '../userActions';
import './login.scss';
import { Icon } from 'antd';

interface LogOutProps {
  logOut: (token: string) => void;
}

const LogOut = ({ logOut }: LogOutProps) => {
  return (
    <div onClick={() => logOut('token')} className="log-out-btn">
      Log out
      <span className="icon-logout">
        <Icon type="logout" style={{ fontSize: 16 }} />
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<actions.UserActions>) => ({
  logOut: (token: string) => dispatch(actions.logOut(token)),
});
export default connect(null, mapDispatchToProps)(LogOut);
