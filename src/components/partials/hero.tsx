import {LinkType} from '@app/library/types';
import {isPopulated} from '@growthops/ext-ts';
import Link from 'next/link';
import {Button} from '..';
import {Image, ResponsiveImageType} from 'react-datocms';

type HeroProperties = {
  heading: string;
  subheading: string;
  synopsis: string;
  heroImage: ResponsiveImageType;
  actions: LinkType[];
};

const Hero = ({
  heading,
  subheading,
  synopsis,
  heroImage,
  actions,
}: HeroProperties): JSX.Element => (
  <section className="h-screen flex justify-center items-center">
    <div className="flex flex-col md:flex-row-reverse gap-4 container">
      <div>
        <Image data={heroImage} />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-2xl">{subheading}</span>
        <h1 className="text-6xl">{heading}</h1>
        <p className="text-base">{synopsis}</p>
        {isPopulated(actions) && (
          <div className="flex space-x-8">
            {actions.map((action) => (
              <Link
                passHref
                legacyBehavior
                key={action.href}
                href={action.href}
              >
                <Button.Link label={action.label} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  </section>
);

export default Hero;

export type {HeroProperties as HeroProps};
