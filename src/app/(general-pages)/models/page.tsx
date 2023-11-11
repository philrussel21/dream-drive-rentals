'use client';

import {CarCard, Heading, Select} from '@app/components';
import {Container, Hero, Region} from '@app/components/partials';
import type {Option} from '@app/components/select';
import {carMakers, locations, fuelTypes} from '@app/config';
import carsData from '@app/data/cars.json';
import type {Car} from '@app/library/types';
import {isPopulated} from '@growthops/ext-ts';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {filter} from 'remeda';

type SortKey = 'priceAsc' | 'priceDesc' | 'yearAsc' | 'yearDesc';

type SortOption = {
	label: string;
	value: SortKey;
};

type FilterState = {
	make?: string;
	location?: string;
	fuelType?: string;
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
	make: undefined,
	location: undefined,
	fuelType: undefined,
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
	const [filterState, setFilterState] = useState<FilterState>(initialFilterState);
	const [sortState, setSortState] = useState<SortKey>();

	const handleFilterChange = useCallback((id: string, newValue: string) => {
		setFilterState({
			...initialFilterState,
			[id]: newValue,
		});
	}, []);

	const handleSortChange = useCallback((_id: string, newValue: string) => {
		setSortState(newValue as SortKey);
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

	useEffect(() => {
		if (isPopulated(filterState.make)) {
			setCars(filter(carsData, car => car.make === filterState.make));
			
			return;
		}

		if (isPopulated(filterState.location)) {
			setCars(filter(carsData, car => car.location === filterState.location));
			
			return;
		}

		if (isPopulated(filterState.fuelType)) {
			setCars(filter(carsData, car => car.fuel === filterState.fuelType));
			
			return;
		}
		setCars(carsData);
	}, [filterState]);
	
	return (
		<div>
			<Hero title="Vehicle Models"/>
			<Region>
				<Container className="flex flex-col gap-8 md:flex-row">
					<div className="shrink-0 min-w-[220px]">
						<div className="bg-brand-platinum rounded-xl p-4 sticky top-28 space-y-6 shadow-lg">
							<div className="space-y-6">
								<Heading variant="subheading" element="h3" label="Filter by"/>
								<Select
									label="Make"
									id="make"
									options={generateFilterOptions(carMakers)}
									icon="car"
									onChange={handleFilterChange}
								/>
								<Select
									label="Location"
									id="location"
									options={generateFilterOptions(locations)}
									icon="location"
									onChange={handleFilterChange}
								/>
								<Select
									label="Fuel Type"
									id="fuelType"
									options={generateFilterOptions(fuelTypes)}
									icon="miles"
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
									onChange={handleSortChange}
								/>
							</div>
						</div>
					</div>
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
							/>
						))}
					</ul>
				</Container>
			</Region>
		</div>
	);
};

export default VehicleModelsPage;
