'use client';

import {forwardRef, useMemo} from 'react';
import {notNil} from '@growthops/ext-ts';
import icons from '@app/library/icons';

type InputProperties = React.ComponentPropsWithoutRef<'input'> & {
  id: string;
  label: string;
  error?: string;
  className?: string;
  icon?: string;
};

const Input = forwardRef<HTMLInputElement, InputProperties>(
  (
    {
      className,
      id,
      label,
      error,
      icon,
      ...intrinsicInputProperties
    }: InputProperties,
    reference
  ) => {
    const Icon = useMemo(() => icons[icon as keyof typeof icons], []);

    return (
      <div className="space-y-4">
        <label htmlFor={id} className="flex space-x-2">
          {notNil(Icon) && <Icon className="w-7" />}
          <span>{label}</span>
        </label>
        <input
          ref={reference}
          id={id}
          className="p-4 w-full bg-gray-300"
          {...intrinsicInputProperties}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;

export type {InputProperties as InputProps};
