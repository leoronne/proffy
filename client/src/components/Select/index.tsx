import React, { SelectHTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

import { InputBlock } from './styles';

interface SelectContainerProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  options: Array<{ value: string; label: string }>;
  touched?: boolean;
  errors?: string;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
  };
  handleBlur?: {
    (e: React.FocusEvent<any>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
}

const Select: React.FC<SelectContainerProps> = ({ label, id, options, touched, errors, handleChange, handleBlur, ...rest }) => {
  const { t } = useTranslation();
  return (
    <InputBlock>
      <label htmlFor={id}>{label}</label>
      <select name={id} id={id} value="" className={touched && errors ? 'error' : ''} onChange={handleChange} onBlur={(e) => handleBlur && handleBlur(e)} {...rest}>
        <option value="" disabled hidden>
          {t('select')}
        </option>

        {options.map((option) => {
          return (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      {touched && errors && <div className="error-message">{errors}</div>}
    </InputBlock>
  );
};

export default Select;
