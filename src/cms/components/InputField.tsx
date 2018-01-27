import * as React from 'react';
import {
  WrappedFieldInputProps,
  WrappedFieldMetaProps,
} from 'redux-form/lib/Field';

interface Props {
  input: WrappedFieldInputProps;
  label: string;
  placeholder: string;
  type: string;
  meta: WrappedFieldMetaProps;
}

const style = {
  color: '#fff',
  fontSize: 14
};

const InputField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error },
}: Props) => (
  <div>
    <label style={style}>{label}</label>
    <div>
      <input
        {...input}
        type={type}
        className={`form-control ${
          touched && error ? 'border border-danger' : ''
        }`}
      />
      {touched && error && <span className="text-danger">{error}</span>}
    </div>
  </div>
);

export default InputField;
