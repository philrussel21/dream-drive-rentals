import {Image} from 'react-datocms';
import {Heading} from '..';

type HeroProperties = {
  title: string;
};

const Hero = ({title}: HeroProperties): JSX.Element => (
  <div className="relative">
    <div className="absolute md:static inset-0 overflow-hidden">
      <Image
        data={{
          src: 'images/hero-bg.png',
          width: 1900,
          aspectRatio: 2.35,
        }}
        className="object-cover"
      />
    </div>
    <div className="relative py-12 md:absolute inset-0 flex justify-center items-center text-brand-off-white">
      {/* TODO: Parallax */}
      <Heading label={title} variant="heading-one" element="h1" />
    </div>
  </div>
);

export default Hero;

export type {HeroProperties as HeroProps};
