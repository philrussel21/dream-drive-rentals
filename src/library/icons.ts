import {CalendarDaysIcon, MapPinIcon, TrophyIcon} from '@heroicons/react/24/outline';
import * as SVG from '@app/components/svgs';

type Icon = keyof typeof icons;

const icons = {
	trophy: TrophyIcon,
	location: MapPinIcon,
	calendar: CalendarDaysIcon,
	customers: SVG.Customers,
	car: SVG.Car,
	operator: SVG.Operator,
	locations: SVG.Locations,
	pickups: SVG.Pickups,
	pricing: SVG.Pricing,
	charge: SVG.Charge,
	miles: SVG.Miles,
};

export default icons;

export type {
	Icon,
};
