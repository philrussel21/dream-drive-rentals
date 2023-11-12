'use client';

import {BookingModal, CarCard, Heading, Select, Text} from '@app/components';
import {Container, Hero, Region} from '@app/components/partials';
import type {Option} from '@app/components/select';
import {carMakers, locations, fuelTypes} from '@app/config';
import {useBookingContext} from '@app/context/book';
import carsData from '@app/data/cars.json';
import type {Car} from '@app/library/types';
import {isPopulated, notPopulated} from '@growthops/ext-ts';
import type {ChangeEvent} from 'react';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {filter} from 'remeda';

type SortKey = 'priceAsc' | 'priceDesc' | 'yearAsc' | 'yearDesc';

type SortOption = {
	label: string;
	value: SortKey;
};

type FilterState = {
	make: string;
	location: string;
	fuelType: string;
};

const sortOptions: SortOption[] = [
	{
		label: 'Price lowest',
		value: 'priceAsc',
	},
	{
		label: 'Price highest',
		value: 'priceDesc',
	},
	{
		label: 'Year oldest',
		value: 'yearAsc',
	},
	{
		label: 'Year newest',
		value: 'yearDesc',
	},
];

const initialFilterState: FilterState = {
	make: '',
	location: '',
	fuelType: '',
};

const generateFilterOptions = (options: string[]): Option[] => [
	{
		label: 'All',
		value: '',
	},
	...options.map((option) => ({label: option, value: option})),
];

const VehicleModelsPage = (): JSX.Element => {
	const [cars, setCars] = useState<Car[]>(carsData);
	const [selectedCar, setSelectedCar] = useState<Car>();
	const [filterState, setFilterState] = useState<FilterState>(initialFilterState);
	const [sortState, setSortState] = useState<SortKey>();
	const {make, pickUpLocation, dropOffDate, dropOffLocation, pickUpDate} = useBookingContext();

	const handleFilterChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
		const {id, value} = event.target;
		setFilterState(current => ({
			...current,
			[id]: value,
		}));
	}, []);

	const handleSortChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
		setSortState(event.target.value as SortKey);
	}, []);

	const sortedData = useMemo(() => {
		if (isPopulated(sortState)) {
			return cars.sort((a, b) => {
				switch (sortState) {
					case 'priceAsc': {
						return a.price - b.price;
					}
					case 'priceDesc': {
						return b.price - a.price;
					}
					case 'yearAsc': {
						return a.year - b.year;
					}
					case 'yearDesc': {
						return b.year - a.year;
					}
					default: {
						return 0;
					}
				}
			});
		}

		return cars;
	}, [filterState, sortState, cars]);

	const handleSelectCar = useCallback((id: string) => {
		setSelectedCar(carsData.find(car => car.id === id));
	}, []);

	const handleClearModal = useCallback(() => {
		// eslint-disable-next-line unicorn/no-useless-undefined
		setSelectedCar(undefined);
	}, []);

	useEffect(() => {
		if (Object.values(filterState).every(value => !isPopulated(value))) {
			setCars(carsData);
			
			return;
		}

		setCars(
			filter(carsData, (car) =>
				Object.entries(filterState).every(([key, value]) =>
					isPopulated(value) ? car[key as keyof Car] === value : true,
				),
			),
		);
	}, [filterState]);

	useEffect(() => {
		setFilterState({
			make,
			location: pickUpLocation,
			fuelType: '',
		});
	}, [make, pickUpLocation]);
	
	return (
		<div>
			<Hero title="Vehicle Models"/>
			<Region>
				<Container>
					<div className="space-y-4 text-center">
						<Heading
							label="Explore the Latest and Greatest"
							variant="subheading"
							element="span"
						/>
						<Heading
							label="Discover and Choose Your Ideal Car"
							variant="heading-two"
							element="h2"
						/>
						<Text className="max-w-xl mx-auto">
							Embark on a journey through an extensive collection of cutting-edge car models that redefine style, performance, and innovation. Your perfect ride awaits – from sleek sedans to powerful SUVs and nimble hybrids. Dive into the details, compare features, and select the car that best suits your lifestyle. Our showroom is your gateway to finding the perfect fusion of technology and design in automotive excellence. Begin your exploration and choose the car that complements your unique preferences and needs.
						</Text>
					</div>
					<div id="models" className="flex flex-col gap-8 md:flex-row mt-16">
						<div className="shrink-0 min-w-[220px]">
							<div className="bg-black text-brand-off-white rounded-xl px-4 py-6 sticky top-28 space-y-6 shadow-lg">
								<div className="space-y-6">
									<Heading variant="subheading" element="h3" label="Filter by"/>
									<Select
										label="Make"
										id="make"
										options={generateFilterOptions(carMakers)}
										icon="car"
										value={filterState.make}
										onChange={handleFilterChange}
									/>
									<Select
										label="Location"
										id="location"
										options={generateFilterOptions(locations)}
										icon="location"
										value={filterState.location}
										onChange={handleFilterChange}
									/>
									<Select
										label="Fuel Type"
										id="fuelType"
										options={generateFilterOptions(fuelTypes)}
										icon="miles"
										value={filterState.fuelType}
										onChange={handleFilterChange}
									/>
								</div>
								<div className="space-y-6">
									<Heading variant="subheading" element="h3" label="Sort by"/>
									<Select
										label="Sort"
										id="sort"
										options={sortOptions}
										icon="trophy"
										placeholder="Select"
										onChange={handleSortChange}
									/>
								</div>
							</div>
						</div>
						{isPopulated(sortedData) && (
							<ul className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
								{sortedData.map(car => (
									<CarCard
										key={car.id}
										{...car}
										image={{
											...car.image,
											width: 800,
											aspectRatio: 2,
										}}
										onClick={handleSelectCar}
									/>
								))}
							</ul>
						)}
						{notPopulated(sortedData) && (
							<Heading variant="subheading" element="h3" label="No results found. Please update your filters to try again."/>
						)}
					</div>
					{isPopulated(selectedCar) && (
						<BookingModal
							car={selectedCar}
							pickUpLocation={selectedCar.location}
							dropOffLocation={isPopulated(dropOffLocation) ? dropOffLocation : selectedCar.location}
							pickUpDate={pickUpDate}
							dropOffDate={dropOffDate}
							onCloseModal={handleClearModal}
						/>
					)}
				</Container>
			</Region>
		</div>
	);
};

export default VehicleModelsPage;
