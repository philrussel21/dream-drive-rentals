import {Button, DateSelector, Heading, Select} from '..';
import {carMakers, locations} from '@app/config';
import Link from 'next/link';

type BookSectionProperties = {
  heading: string;
};

const BookSection = ({heading}: BookSectionProperties): JSX.Element => (
	<section className="p-10 bg-black rounded-lg text-brand-off-white drop-shadow-2xl">
		<Heading label={heading} variant="heading-three" element="h2"/>
		<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mt-5">
			<div>
				<Select
					label="Select your car"
					id="car"
					options={carMakers.map((make) => ({label: make, value: make}))}
					icon="car"
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
				/>
			</div>
			<div>
				<DateSelector label="Pick up date" id="pickUpDate" icon="calendar"/>
			</div>
			<div>
				<DateSelector label="Drop off date" id="dropOffDate" icon="calendar"/>
			</div>
			<div className="flex items-end">
				<Link passHref legacyBehavior href="/book">
					<Button.Link label="Book now" className="!w-full"/>
				</Link>
			</div>
		</div>
	</section>
);

export default BookSection;

export type {BookSectionProperties as BookSectionProps};
