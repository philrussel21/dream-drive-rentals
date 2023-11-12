import type {ResponsiveImageType} from 'react-datocms/image';
import {Image} from 'react-datocms/image';
import {Button, Heading, Text} from './';

type CarCardProperties = {
	model: string;
	make: string;
	price: number;
	year: number;
	capacity: number;
	transmission: string;
	fuelType: string;
	location: string;
	image: ResponsiveImageType;
};

const carLabelClasses = 'font-bold px-2';
const carValueClasses = 'border-l-2 border-brand-charcoal px-2 text-center';

const CarCard = ({model, make, image, price, year, capacity, transmission, fuelType, location}: CarCardProperties): JSX.Element => (
	<article>
		<div className="border rounded-t-xl p-5">
			<Heading label={`${year}`} variant="subheading" element="h4"/>
			<Heading label={`${make} ${model}`} variant="subheading" element="h3"/>
			<Text element="span" className="opacity-70">{location}</Text>
			<Image data={image}/>
		</div>
		<div className="p-3 bg-brand-charcoal text-brand-gold flex justify-between items-center space-x-2">
			<Heading variant="heading-five" label={`$${price} / day`}/>
			<Button.Semantic label="Book now" className="w-full block"/>
		</div>
		<div className="grid grid-cols-2 p-2 border-x-2 border-gray-800">
			<p className={carLabelClasses}>Make</p>
			<p className={carValueClasses}>{make}</p>
		</div>
		<div className="grid grid-cols-2 p-2 border-2 border-gray-800">
			<p className={carLabelClasses}>Capacity</p>
			<p className={carValueClasses}>{capacity}</p>
		</div>
		<div className="grid grid-cols-2 p-2 border-2 border-t-0 border-gray-800">
			<p className={carLabelClasses}>Transmission</p>
			<p className={carValueClasses}>{transmission}</p>
		</div>
		<div className="grid grid-cols-2 p-2 border-2 border-t-0 border-gray-800">
			<p className={carLabelClasses}>Fuel</p>
			<p className={carValueClasses}>{fuelType}</p>
		</div>
	</article>
);

export default CarCard;

export type {
	CarCardProperties as CarCardProps,
};