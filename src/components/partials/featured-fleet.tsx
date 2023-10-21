'use client';

import {Image, ResponsiveImageType} from 'react-datocms';
import {Accordion, Button} from '..';
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
  fuel: string;
  image: ResponsiveImageType;
};

type FeaturedFleetProperties = {
  heading: string;
  subheading: string;
  content: string;
  cars: FeaturedCar[];
};

const CarTableData = ({car}: {car: FeaturedCar}): JSX.Element => (
  <div className="space-y-4">
    <div className="flex flex-col">
      <div className="p-4 bg-gray-800 text-white">
        <p>{`$${car.price} / day`}</p>
      </div>
      <div className="grid grid-cols-2 p-2 border-x-2 border-gray-800">
        <p>Make</p>
        <p className="border-l-2 border-gray-800">{car.make}</p>
      </div>
      <div className="grid grid-cols-2 p-2 border-2 border-gray-800">
        <p>Model</p>
        <p className="border-l-2 border-gray-800">{car.model}</p>
      </div>
      <div className="grid grid-cols-2 p-2 border-2 border-t-0 border-gray-800">
        <p>Year</p>
        <p className="border-l-2 border-gray-800">{car.year}</p>
      </div>
      <div className="grid grid-cols-2 p-2 border-2 border-t-0 border-gray-800">
        <p>Capacity</p>
        <p className="border-l-2 border-gray-800">{car.capacity}</p>
      </div>
      <div className="grid grid-cols-2 p-2 border-2 border-t-0 border-gray-800">
        <p>Transmission</p>
        <p className="border-l-2 border-gray-800">{car.transmission}</p>
      </div>
      <div className="grid grid-cols-2 p-2 border-2 border-t-0 border-gray-800">
        <p>Fuel</p>
        <p className="border-l-2 border-gray-800">{car.fuel}</p>
      </div>
    </div>
    <div>
      <Link passHref legacyBehavior href="/">
        <Button.Link
          label="Reserve now"
          variant="secondary"
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
    []
  );

  return (
    <div className="text-center">
      <span>{subheading}</span>
      <h2>{heading}</h2>
      <p className="max-w-lg mx-auto">{content}</p>
      <div className="mt-6 md:hidden">
        <Accordion.Container expandMode="multiple">
          {cars.map((car) => (
            <Accordion.Panel label={`${car.year} ${car.make} ${car.model}`}>
              <div className="space-y-6 text-black">
                <div>
                  <Image data={car.image} />
                </div>
                <CarTableData car={car} />
              </div>
            </Accordion.Panel>
          ))}
        </Accordion.Container>
      </div>
      <div className="hidden mt-6 md:flex justify-between space-x-8">
        <div className="flex flex-col space-y-4">
          {cars.map((car) => (
            <button
              key={car.make}
              type="button"
              className={`p-4 bg-gray-800 rounded-md hover:bg-gray-500 ${
                activeCar.id === car.id ? 'bg-gray-500' : ''
              }`}
              onClick={handleChooseCar(car)}
            >
              {`${car.year} ${car.make} ${car.model}`}
            </button>
          ))}
        </div>
        <div>
          <Image data={activeCar.image} className="object-cover" />
        </div>
        <div>
          <CarTableData car={activeCar} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedFleet;

export type {FeaturedFleetProperties as FeaturedFleetProps};
