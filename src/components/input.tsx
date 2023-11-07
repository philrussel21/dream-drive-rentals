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
			id,
			label,
			icon,
			...intrinsicInputProperties
		}: InputProperties,
		reference,
	) => {
		const Icon = useMemo(() => icons[icon as keyof typeof icons], []);

		return (
			<div className="space-y-4">
				<label htmlFor={id} className="flex space-x-2 text-xl">
					{notNil(Icon) && <Icon className="w-7"/>}
					<span>{label}</span>
				</label>
				<input
					ref={reference}
					id={id}
					className="p-4 w-full bg-white rounded-md text-black outline-brand-charcoal"
					{...intrinsicInputProperties}
				/>
			</div>
		);
	},
);

Input.displayName = 'Input';

export default Input;

export type {InputProperties as InputProps};
