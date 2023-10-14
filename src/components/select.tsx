'use client';

import icons, {Icon} from '@app/library/icons';
import {notNil} from '@growthops/ext-ts';
import {useMemo} from 'react';
import ReactSelect from 'react-select';

type Option = {
  label: string;
  value: string;
};

type SelectProperties = {
  id: string;
  label: string;
  options: Option[];
  icon?: Icon;
};

const Select = ({label, id, options, icon}: SelectProperties): JSX.Element => {
  const Icon = useMemo(() => icons[icon as keyof typeof icons], []);
  return (
    <div>
      <label htmlFor={id} className="flex space-x-2">
        {notNil(Icon) && <Icon className="w-7" />}
        <span>{label}</span>
      </label>
      <ReactSelect options={options} id={id} />
    </div>
  );
};

export default Select;

export type {SelectProperties as SelectProps};
