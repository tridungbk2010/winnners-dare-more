import * as React from 'react';
import {
  Field,
  FormErrors,
  InjectedFormProps,
  reduxForm,
  SubmitHandler,
} from 'redux-form';
import InputField from '../../components/InputField';
import { LoginForm } from '../../model/loginModel';
import './login.scss';
import Header from '../../../client/components/header/Header';

interface Props extends InjectedFormProps {
  handleSubmit: SubmitHandler;
  pristine: boolean;
  submitting: boolean;
}

class Login extends React.Component<Props, Object> {
  onLoginSubmit = (formValues: LoginForm) => {
    console.log(formValues);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="login-container">
        <Header />
        <div className="login-form-container">
          <div>
            <span className="login-header">Login</span>
            <form onSubmit={handleSubmit(this.onLoginSubmit)} className="login-form">
              <div className="form-group">
                <Field
                  name="email"
                  component={InputField}
                  type="text"
                  label="Email"
                />
              </div>
              <div className="form-group">
                <Field
                  name="password"
                  component={InputField}
                  type="password"
                  label="Password"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
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

export default reduxForm<FormData>({
  form: 'loginForm',
  validate,
})(Login);
