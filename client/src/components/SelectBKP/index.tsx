import React, { SelectHTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

import { InputBlock } from './styles';

interface SelectContainerProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  options: Array<{ value: string, label: string }>;
}

const Select: React.FC<SelectContainerProps> = ({ label, id, options, ...rest }) => {
  const { t } = useTranslation();
  return (
    <InputBlock>
      <label htmlFor={id}>{label}</label>
      <select name={id} id={id} value="" {...rest} >
        <option value="" disabled hidden>{t('select')}</option>

        {options.map(option => {
          return (
            <option value={option.value} key={option.value}>{option.label}</option>
          )
        })}

      </select>
    </InputBlock>
  );
};

export default Select;
