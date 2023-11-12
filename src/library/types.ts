
type LinkType = {
  label: string;
  href: string;
};

type Car = {
	id: string;
	model: string;
	make: string;
	price: number;
	year: number;
	capacity: number;
	transmission: string;
	fuelType: string;
	location: string;
	image: {
		src: string;
		alt: string;
	};
};

export type {
	LinkType,
	Car,
};