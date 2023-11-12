import {forwardRef, useMemo} from 'react';
import type * as React from 'react';
import {isNil} from 'remeda';
import {ChevronDownIcon} from '@heroicons/react/24/solid';
import {collapse, notNil} from '@growthops/ext-ts';
import type {Icon} from '@app/library/icons';
import icons from '@app/library/icons';

type Option = {
	value: string;
	label: string;
};

type SelectProperties = React.ComponentPropsWithoutRef<'select'>
	& {
		id: string;
		label: string;
		error?: string;
		className?: string;
		icon: Icon;
		options: Option[];
	};

const chevronClasses = collapse(`
	absolute
	top-1/2
	right-0
	-translate-y-1/2
	w-5
	mx-2
	text-true-gray-500
	select-none
	pointer-events-none
`);

const Select = forwardRef<HTMLSelectElement, SelectProperties>(({
	id, label, options, icon, placeholder, ...intrinsicSelectProperties
}: SelectProperties, reference) => {
	const Icon = useMemo(() => icons[icon], []);

	return (
		<div>
			<label>
				<label htmlFor={id} className="flex space-x-2 items-center text-xl">
					{notNil(Icon) && (
						<Icon
							className={
								icon === 'car' ? 'w-12 h-7' : 'w-7 text-brand-gold stroke-current'
							}
						/>
					)}
					<span>{label}</span>
				</label>
				<div className="relative mt-1">
					<ChevronDownIcon className={chevronClasses}/>
					<select
						ref={reference}
						id={id}
						className="w-full appearance-none px-2 py-2.5 rounded-md"
						placeholder={placeholder}
						{...intrinsicSelectProperties}
						defaultValue=""
					>
						{!isNil(placeholder) && (
							<option disabled value="">{placeholder}</option>
						)}
						{options.map(({value, label}) => (
							<option key={value} value={value}>{label}</option>
						))}
					</select>
				</div>
			</label>
		</div>
	);
});

Select.displayName = 'Select';

export default Select;

export type {
	Option,
	SelectProperties as SelectProps,
};
