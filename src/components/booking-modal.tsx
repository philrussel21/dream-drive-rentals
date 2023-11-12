'use client';

import type {Car} from '@app/library/types';
import {Dialog, Transition} from '@headlessui/react';
import type {ChangeEvent} from 'react';
import {Fragment, useCallback} from 'react';
import Heading from './heading';
import Button from './button';
import Select from './select';
import DateSelector from './date-selector';
import {locations} from '@app/config';
import {Image} from 'react-datocms/image';
import {useBookingContext} from '@app/context/book';
import Link from 'next/link';

type BookingModalProperties = {
	car: Car;
	pickUpLocation: string;
	dropOffLocation: string;
	pickUpDate: Date;
	dropOffDate: Date;
	onCloseModal: () => void;
};

const carLabelClasses = 'font-bold px-2';
const carValueClasses = 'border-l-2 border-brand-charcoal px-2';

const CarMetaData = ({car}: {car: Car}): JSX.Element => (
	<div className="space-y-4">
		<div className="flex flex-col">
			<div className="p-4 bg-brand-charcoal text-brand-gold">
				<Heading variant="heading-five" label={`$${car.price} / day`} className="text-center"/>
			</div>
			<div className="grid grid-cols-2 p-2 border-2 border-t-0 border-gray-800">
				<p className={carLabelClasses}>Capacity</p>
				<p className={carValueClasses}>{car.capacity}</p>
			</div>
			<div className="grid grid-cols-2 p-2 border-2 border-t-0 border-gray-800">
				<p className={carLabelClasses}>Transmission</p>
				<p className={carValueClasses}>{car.transmission}</p>
			</div>
			<div className="grid grid-cols-2 p-2 border-2 border-t-0 border-gray-800">
				<p className={carLabelClasses}>Fuel</p>
				<p className={carValueClasses}>{car.fuelType}</p>
			</div>
		</div>
	</div>
);

const BookingModal = ({car, pickUpDate, pickUpLocation, dropOffDate, dropOffLocation, onCloseModal: handleCloseModal}: BookingModalProperties): JSX.Element => {
	const {handleUpdateContext, handleFinaliseBooking} = useBookingContext();

	const handleDateChange = useCallback((date: Date, id: string) => {
		if (id === 'pickUpDate') {
			handleUpdateContext('pickUpDate', date);
		}

		if (id === 'dropOffDate') {
			handleUpdateContext('dropOffDate', date);
		}
	}, [handleUpdateContext]);

	const handleSelectChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
		const {id, value} = event.target;
	
		if (id === 'dropOffLocation') {
			handleUpdateContext('dropOffLocation', value);
		}
	}, [handleUpdateContext]);

	const handleBookingConfirm = useCallback(() => {
		handleFinaliseBooking();
	}, [handleFinaliseBooking]);
	
	return (
		<Transition appear show as={Fragment}>
			<Dialog as="div" className="relative z-50" onClose={handleCloseModal}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black/25"/>
				</Transition.Child>
				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-8 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all max-w-7xl">
								<Dialog.Title as="div">
									<Heading label="Please confirm the booking details below" variant="heading-three" element="h3" className="text-center"/>
								</Dialog.Title>
								<div className="mt-4 flex flex-col md:flex-row-reverse md:items-center gap-y-6">
									<div>
										<div className="flex flex-col md:flex-row items-center">
											<div className="md:min-h-[450px] flex items-center">
												<Image
													data={{
														...car.image,
														width: 800,
														aspectRatio: 2,
													}}
													className="object-cover"
												/>
											</div>
											<div className="shrink-0 space-y-4 mt-4 md:mt-0">
												<Heading label={`${car.year} ${car.make} ${car.model}`} variant="heading-two" element="h3" className="text-center md:hidden"/>
												<CarMetaData car={car}/>
											</div>
										</div>
										<Heading label={`${car.year} ${car.make} ${car.model}`} variant="heading-two" element="h3" className="text-center hidden md:block"/>
									</div>
									<div className="px-4 py-6 bg-black text-brand-off-white space-y-6 rounded-xl">
										<Select
											disabled
											label="Pick up location"
											id="pickupLocation"
											options={locations.map((location) => ({
												label: location,
												value: location,
											}))}
											icon="location"
											placeholder="Select"
											value={pickUpLocation}
										/>
										<Select
											label="Drop off location"
											id="dropOffLocation"
											options={locations.map((location) => ({
												label: location,
												value: location,
											}))}
											icon="location"
											placeholder="Select"
											value={dropOffLocation}
											onChange={handleSelectChange}
										/>
										<DateSelector
											id="pickUpDate"
											icon="calendar"
											defaultDate={pickUpDate}
											label="Pick up date"
											onChange={handleDateChange}
										/>
										<DateSelector
											id="dropOffDate"
											icon="calendar"
											defaultDate={dropOffDate}
											label="Drop off date"
											onChange={handleDateChange}
										/>
									</div>
								</div>
								<div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
									<Link passHref legacyBehavior href={`/confirmation?id=${car.id}`}>
										<Button.Link label="Book" onClick={handleBookingConfirm}/>
									</Link>
									<Button.Semantic variant="secondary" label="Cancel" onClick={handleCloseModal}/>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default BookingModal;

export type {
	BookingModalProperties as BookingModalProps,
};