import React, { InputHTMLAttributes } from 'react';
import PhoneInput from 'react-phone-input-2';
import i18next from 'i18next';

import { InputBlock } from './styles';
import 'react-phone-input-2/lib/bootstrap.css';

interface InputContainerProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  value?: string;
  touched?: boolean;
  errors?: string;
  handleChange: any;
  handleBlur: {
    (e: React.FocusEvent<any>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  placeholder?: string;
}

const Input: React.FC<InputContainerProps> = ({ touched, errors, value, label, id, children, handleChange, handleBlur, ...rest }) => {
  return (
    <InputBlock>
      <label htmlFor={id}>{label}</label>
      <PhoneInput
        value={value}
        country={i18next.languages[0] !== 'en' ? 'br' : 'us'}
        preferredCountries={['us', 'br']}
        inputProps={{ id: id, name: id }}
        onChange={(phone) => handleChange(phone)}
        onBlur={(e) => handleBlur(e)}
        inputClass={touched && errors ? 'error' : ''}
      />
      {touched && errors && <div className="error-message">{errors}</div>}
    </InputBlock>
  );
};

export default Input;
