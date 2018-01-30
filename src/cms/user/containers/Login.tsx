import * as React from 'react';
import {
  Field,
  FormErrors,
  InjectedFormProps,
  reduxForm,
  SubmitHandler,
} from 'redux-form';
import InputField from '../../common/InputField';
import { LoginForm, LoginState } from '../userModel';
import './login.scss';
import { connect, Dispatch } from 'react-redux';
import * as userActions from '../userActions';
import { Redirect } from 'react-router';
import * as _ from 'lodash';
import { RootState } from '../../../rootReducer';
import Header from '../../../client/components/header/Header';
import { Spin, Icon } from 'antd';

interface Props extends InjectedFormProps {
  handleSubmit: SubmitHandler;
  pristine: boolean;
  submitting: boolean;
  error: string;
  login: (payload: LoginForm) => userActions.UserActions;
  userInfo: LoginState;
}

class Login extends React.Component<Props, Object> {
  onLoginSubmit = (formValues: LoginForm) => {
    this.props.login(formValues);
  };

  render() {
    const { handleSubmit, submitting, pristine, error, userInfo } = this.props;
    const isAuthenticated = !_.isEmpty(userInfo) && userInfo.token;
    if (isAuthenticated) {
      return <Redirect to="/admin" />;
    }
    const antIcon = (
      <Icon
        type="loading"
        style={{ fontSize: 24, color: '#fff' }}
        spin={true}
      />
    );
    return (
      <div className="login-container">
        <Header />
        <div className="login-form-container">
          <div>
            <span className="login-header">Login</span>
            <form
              onSubmit={handleSubmit(this.onLoginSubmit)}
              className="login-form"
            >
              <div className="form-group">
                <Field
                  name="email"
                  component={InputField}
                  type="text"
                  disabled={submitting}
                  label="Email"
                />
              </div>
              <div className="form-group">
                <Field
                  name="password"
                  disabled={submitting}
                  component={InputField}
                  type="password"
                  label="Password"
                />
              </div>
              <div className="wdm-btn-login">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={pristine || submitting}
                >
                  {submitting ? (
                    <Spin size="small" indicator={antIcon} />
                  ) : (
                    'Login'
                  )}
                </button>
              </div>
              {error && <span className="text-danger">{error}</span>}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

interface ErrorType extends FormErrors<FormData> {
  email: string;
  password: string;
}

interface ValidateValueType extends FormData, LoginForm {}
const validate = (values: ValidateValueType) => {
  const errors: ErrorType = {
    email: '',
    password: '',
  };
  if (!values.email) {
    errors.email = 'Please enter your email!';
  }
  if (!values.password) {
    errors.password = 'Please enter your password!';
  }
  return errors;
};

const mapStateToProps = (state: RootState) => ({
  userInfo: state.userInfo,
});

const mapDispatchToProps = (dispatch: Dispatch<userActions.UserActions>) => ({
  login: (payload: LoginForm) => dispatch(userActions.login(payload)),
});

export default reduxForm<FormData>({
  form: 'loginForm',
  validate,
})(connect(mapStateToProps, mapDispatchToProps)(Login));
