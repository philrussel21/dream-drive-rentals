import { CalendarDaysIcon, MapPinIcon, TrophyIcon } from "@heroicons/react/24/outline";

type Icon = keyof typeof icons;

const icons = {
	trophy: TrophyIcon,
	location: MapPinIcon,
  calendar: CalendarDaysIcon,
};

export default icons;

export type {
	Icon,
};
