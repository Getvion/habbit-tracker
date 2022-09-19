import React from 'react';
import Select, { SingleValue } from 'react-select';

import './CustomSelect.scss';

interface CustomSelectProps {
  nameOfSelect: string;
  options: { value: string; label: string }[];
  onChange: (newValue: SingleValue<{ value: string }>) => void;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({ options, nameOfSelect, onChange }) => (
  <Select
    onChange={onChange}
    defaultValue={options[0]}
    options={options}
    name={nameOfSelect}
    className='react-select-container'
    classNamePrefix='react-select'
  />
);
