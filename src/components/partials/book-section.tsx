'use client';

import type {BookContextType} from '@app/context/book';
import {useBookingContext} from '@app/context/book';
import {Button, DateSelector, Heading, Select} from '..';
import {carMakers, locations} from '@app/config';
import Link from 'next/link';
import type {ChangeEvent} from 'react';
import {useCallback, useState} from 'react';

type BookSectionProperties = {
  heading: string;
};

type FormState = {
	make: string;
	pickUpLocation: string;
	dropOffLocation: string;
	pickUpDate?: Date;
	dropOffDate?: Date;
};

const initialData: FormState = {
	make: '',
	pickUpLocation: '',
	dropOffLocation: '',
};

const BookSection = ({heading}: BookSectionProperties): JSX.Element => {
	const [state, setState] = useState(initialData);
	const {handleUpdateContext} = useBookingContext();

	const handleSelectChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
		const {id, value} = event.target;
		setState((current) => ({...current, [id]: value}));	
	}, []);

	const handleDateChange = useCallback((date: Date, id: string) => {
		setState((current) => ({...current, [id]: date}));
	}, []);

	const handleSubmit = useCallback(() => {
		const {pickUpDate, dropOffDate, ...rest} = state;
		handleUpdateContext('pickUpDate', pickUpDate ?? new Date());
		handleUpdateContext('dropOffDate', dropOffDate ?? new Date());

		for (const [key, value] of Object.entries(rest)) {
			handleUpdateContext(key as keyof BookContextType, value);
		}
	}, [state, handleUpdateContext]);
	
	return (
		<section className="p-10 bg-black rounded-lg text-brand-off-white drop-shadow-2xl">
			<Heading label={heading} variant="heading-three" element="h2"/>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mt-5">
				<div>
					<Select
						label="Select your car"
						id="make"
						options={carMakers.map((make) => ({label: make, value: make}))}
						icon="car"
						placeholder="Select"
						value={state.make}
						onChange={handleSelectChange}
					/>
				</div>
				<div>
					<Select
						label="Pick up location"
						id="pickUpLocation"
						options={locations.map((location) => ({
							label: location,
							value: location,
						}))}
						icon="location"
						placeholder="Select"
						value={state.pickUpLocation}
						onChange={handleSelectChange}
					/>
				</div>
				<div>
					<Select
						label="Drop off location"
						id="dropOffLocation"
						options={locations.map((location) => ({
							label: location,
							value: location,
						}))}
						icon="location"
						placeholder="Select"
						value={state.dropOffLocation}
						onChange={handleSelectChange}
					/>
				</div>
				<div>
					<DateSelector
						label="Pick up date"
						id="pickUpDate"
						icon="calendar"
						defaultDate={state.pickUpDate}
						onChange={handleDateChange}
					/>
				</div>
				<div>
					<DateSelector
						label="Drop off date"
						id="dropOffDate"
						icon="calendar"
						defaultDate={state.pickUpDate}
						onChange={handleDateChange}
					/>
				</div>
				<div className="flex items-end">
					<Link passHref legacyBehavior href="/models#models">
						<Button.Link label="Select car" className="!w-full" onClick={handleSubmit}/>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default BookSection;

export type {BookSectionProperties as BookSectionProps};
