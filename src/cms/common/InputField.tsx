import * as React from 'react';
import {
  WrappedFieldInputProps,
  WrappedFieldMetaProps,
} from 'redux-form/lib/Field';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
interface Props {
  input: WrappedFieldInputProps;
  label: string;
  placeholder: string;
  disabled: boolean;
  type: string;
  meta: WrappedFieldMetaProps;
}

const style = {
  color: '#fff',
  fontSize: 14,
};

const InputField = ({
  input,
  label,
  placeholder,
  disabled,
  type,
  meta: { touched, error },
}: Props) => (
  <div>
    <label style={style}>{label}</label>
    <input
      {...input}
      type={type}
      disabled={disabled}
      className={`form-control ${
        touched && error ? 'border border-danger' : ''
      }`}
    />
    {touched && error && <span className="text-danger">{error}</span>}
  </div>
);

export default InputField;
