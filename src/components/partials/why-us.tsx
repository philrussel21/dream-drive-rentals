import Link from 'next/link';
import {Image, ResponsiveImageType} from 'react-datocms';
import {Button, Heading, Text} from '..';
import PerkCard, {PerkCardProps} from '../perk-card';

type WhyUsProperties = {
  heading: string;
  subheading: string;
  content: string;
  image: ResponsiveImageType;
  perks: PerkCardProps[];
};

const WhyUs = ({
  heading,
  subheading,
  content,
  image,
  perks,
}: WhyUsProperties): JSX.Element => (
  <div className="text-center">
    <div>
      <Image data={image} className="mx-auto" />
    </div>
    <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-between mt-10">
      <div className="mt-6 flex flex-col md:w-1/2">
        <Heading label={subheading} variant="subheading" />
        <Heading label={heading} variant="heading-two" element="h2" />
        <Text className="mt-6">{content}</Text>
        <div className="mt-8">
          <Link passHref legacyBehavior href="/book">
            <Button.Link label="Book now" className="!w-auto" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col space-y-6 md:w-1/2">
        {perks.map((perk) => (
          <PerkCard key={perk.title} {...perk} />
        ))}
      </div>
    </div>
  </div>
);

export default WhyUs;

export type {WhyUsProperties as WhyUsProps};
