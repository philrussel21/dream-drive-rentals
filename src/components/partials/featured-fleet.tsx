'use client';

import type {ResponsiveImageType} from 'react-datocms';
import {Image} from 'react-datocms';
import {Accordion, Button, Heading, Text} from '..';
import Link from 'next/link';
import {useCallback, useState} from 'react';

type FeaturedCar = {
  id: string;
  make: string;
  model: string;
  price: number;
  year: string;
  capacity: number;
  transmission: string;
  fuelType: string;
  image: ResponsiveImageType;
};

type FeaturedFleetProperties = {
  heading: string;
  subheading: string;
  content: string;
  cars: FeaturedCar[];
};

const carLabelClasses = 'font-bold px-2';
const carValueClasses = 'border-l-2 border-brand-charcoal px-2';

const CarTableData = ({car}: {car: FeaturedCar}): JSX.Element => (
	<div className="space-y-4">
		<div className="flex flex-col">
			<div className="p-4 bg-brand-charcoal text-brand-gold">
				<Heading variant="heading-five" label={`$${car.price} / day`}/>
			</div>
			<div className="grid grid-cols-2 p-2 border-x-2 border-gray-800">
				<p className={carLabelClasses}>Make</p>
				<p className={carValueClasses}>{car.make}</p>
			</div>
			<div className="grid grid-cols-2 p-2 border-2 border-gray-800">
				<p className={carLabelClasses}>Model</p>
				<p className={carValueClasses}>{car.model}</p>
			</div>
			<div className="grid grid-cols-2 p-2 border-2 border-t-0 border-gray-800">
				<p className={carLabelClasses}>Year</p>
				<p className={carValueClasses}>{car.year}</p>
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
		<div>
			<Link passHref legacyBehavior href="/">
				<Button.Link
					label="Reserve now"
					variant="primary"
					className="!w-full"
				/>
			</Link>
		</div>
	</div>
);

const FeaturedFleet = ({
	heading,
	subheading,
	content,
	cars,
}: FeaturedFleetProperties): JSX.Element => {
	const [activeCar, setActiveCar] = useState<FeaturedCar>(cars[0]);

	const handleChooseCar = useCallback(
		(car: FeaturedCar) => () => {
			setActiveCar(car);
		},
		[],
	);

	return (
		<div className="text-center">
			<Heading label={subheading} variant="subheading"/>
			<Heading label={heading} variant="heading-two" element="h2"/>
			<Text className="max-w-lg mx-auto mt-5">{content}</Text>
			<div className="mt-6 md:hidden">
				<Accordion.Container expandMode="multiple">
					{cars.map((car) => (
						<Accordion.Panel
							key={car.id}
							label={`${car.year} ${car.make} ${car.model}`}
						>
							<div className="space-y-6 text-black">
								<div>
									<Image data={car.image}/>
								</div>
								<CarTableData car={car}/>
							</div>
						</Accordion.Panel>
					))}
				</Accordion.Container>
			</div>
			<div className="hidden mt-12 md:flex justify-between space-x-8">
				<div className="flex flex-col space-y-4">
					{cars.map((car) => (
						<Button.Semantic
							key={car.id}
							type="button"
							disabled={activeCar.id === car.id}
							label={`${car.make} ${car.model}`}
							variant="primary"
							className="disabled:!bg-brand-charcoal disabled:!text-brand-gold"
							onClick={handleChooseCar(car)}
						/>
					))}
				</div>
				<div className="min-h-[450px] flex items-center">
					<Image data={activeCar.image} className="object-cover"/>
				</div>
				<div className="shrink-0">
					<CarTableData car={activeCar}/>
				</div>
			</div>
		</div>
	);
};

export default FeaturedFleet;

export type {FeaturedFleetProperties as FeaturedFleetProps};
