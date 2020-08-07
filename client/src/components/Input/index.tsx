import React, { InputHTMLAttributes } from 'react';

import { InputBlock } from './styles';

interface InputContainerProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  touched?: boolean;
  errors?: string ;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
  };
  handleBlur?: {
    (e: React.FocusEvent<any>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
}

const Input: React.FC<InputContainerProps> = ({ touched, errors, label, id, children, handleChange, handleBlur, ...rest }) => {
  return (
    <InputBlock>
      <label htmlFor={id}>{label}</label>
      <input name={id} id={id} className={touched && errors ? 'error' : ''} onChange={handleChange} onBlur={(e) => handleBlur && handleBlur(e)} {...rest} />
      {touched && errors && <div className="error-message">{errors}</div>}
    </InputBlock>
  );
};

export default Input;
