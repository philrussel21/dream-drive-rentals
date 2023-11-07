'use client';

import {forwardRef, useMemo} from 'react';
import {notNil} from '@growthops/ext-ts';
import icons from '@app/library/icons';

type TextareaProperties = React.ComponentPropsWithoutRef<'textarea'> & {
  id: string;
  label: string;
  error?: string;
  className?: string;
  icon?: string;
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProperties>(
	(
		{
			id,
			label,
			icon,
			...intrinsicTextareaProperties
		}: TextareaProperties,
		reference,
	) => {
		const Icon = useMemo(() => icons[icon as keyof typeof icons], []);

		return (
			<div className="space-y-4">
				<label htmlFor={id} className="flex space-x-2 text-xl">
					{notNil(Icon) && <Icon className="w-7"/>}
					<span>{label}</span>
				</label>
				<textarea
					ref={reference}
					id={id}
					className="p-4 w-full bg-white resize-none rounded-md text-black outline-brand-charcoal"
					{...intrinsicTextareaProperties}
				/>
			</div>
		);
	},
);

Textarea.displayName = 'Textarea';

export default Textarea;

export type {TextareaProperties as TextareaProps};
