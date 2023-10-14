import {TrophyIcon} from '@heroicons/react/24/outline';
import {Button, DateSelector, Select} from '..';
import {cars, locations} from '@app/config';
import Link from 'next/link';

type BookSectionProperties = {
  heading: string;
};

const BookSection = ({heading}: BookSectionProperties): JSX.Element => (
  <section className="p-10 bg-gray-300 rounded-lg text-black">
    <h2>{heading}</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
      <div>
        <Select
          label="Select your car"
          id="car"
          options={cars.map((car) => ({label: car, value: car}))}
          icon="trophy"
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
        <DateSelector label="Pick up date" id="pickUpDate" icon="calendar" />
      </div>
      <div>
        <DateSelector label="Drop off date" id="dropOffDate" icon="calendar" />
      </div>
      <div>
        <Link passHref legacyBehavior href="/book">
          <Button.Link
            label="Book now"
            className="!w-full"
            variant="secondary"
          />
        </Link>
      </div>
    </div>
  </section>
);

export default BookSection;

export type {BookSectionProperties as BookSectionProps};
