'use client';

import type {Icon} from '@app/library/icons';
import icons from '@app/library/icons';
import {notNil} from '@growthops/ext-ts';
import {useCallback, useMemo} from 'react';
import ReactSelect from 'react-select';
import type {ClassNamesConfig} from 'react-select';
import {isNil, isString} from 'remeda';

type Option = {
  label: string;
  value: string;
};

type SelectProperties = {
  id: string;
  label: string;
  options: Option[];
  icon: Icon;
	onChange?: (id: string, newValue: string) => void;
};

const reactSelectClasses: ClassNamesConfig = {
	container: () => 'relative',
	control: () =>
		'flex items-center flex-wrap justify-between min-h-[38px] relative bg-brand-off-white rounded-md',
	valueContainer: () => 'py-2.5 px-2',
	singleValue: () => 'text-brand-charcoal px-0.5',
	indicatorsContainer: () => 'shrink-0 self-stretch flex items-center',
	indicatorSeparator: () => 'self-stretch w-px bg-brand-charcoal/20 my-2',
	dropdownIndicator: () => 'p-2 text-brand-charcoal/20',
	placeholder: () => 'text-brand-charcoal/50 mx-0.5',
	menu: () =>
		'absolute top-full w-full z-10 bg-transparent rounded-md shadow-lg my-2',
	menuList: () =>
		'max-h-80 overflow-y-auto relative py-1 bg-brand-charcoal rounded-lg',
	option: () =>
		'block w-full p-3 text-brand-off-white hover:bg-brand-gold hover:text-brand-charcoal',
};

const Select = ({label, id, options, icon, onChange}: SelectProperties): JSX.Element => {
	const Icon = useMemo(() => icons[icon], []);

	const handleOnSelectChange = useCallback((newValue: unknown) => {
		const selectedOption = newValue as Option;

		if (isNil(onChange) || isNil(selectedOption.value) || !isString(selectedOption.value)) {
			return;
		}
		onChange(id, selectedOption.value);
	}, [onChange]);
	
	return (
		<div>
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
			<ReactSelect
				unstyled
				options={options}
				id={id}
				className="mt-1"
				classNames={reactSelectClasses}
				onChange={handleOnSelectChange}
			/>
		</div>
	);
};

export default Select;

export type {
	SelectProperties as SelectProps,
	Option,
};
