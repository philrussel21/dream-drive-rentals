import { CalendarDaysIcon, MapPinIcon, TrophyIcon } from "@heroicons/react/24/outline";
import * as SVG from '@app/components/svgs';

type Icon = keyof typeof icons;

const icons = {
	trophy: TrophyIcon,
	location: MapPinIcon,
  calendar: CalendarDaysIcon,
	car: SVG.Car,
};

export default icons;

export type {
	Icon,
};
