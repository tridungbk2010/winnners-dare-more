import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import * as actions from '../../actions/userActions';

interface LogOutProps {
  logOut: (token: string) => void;
}
const LogOut = ({ logOut }: LogOutProps) => {
  return (
    <div>
      <button onClick={() => logOut('token')} className="btn btn-primary">
        Log out
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<actions.UserActions>) => ({
  logOut: (token: string) => dispatch(actions.logOut(token)),
});
export default connect(null, mapDispatchToProps)(LogOut);
