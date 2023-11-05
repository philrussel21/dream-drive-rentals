import icons from '@app/library/icons';
import {Image, ResponsiveImageType} from 'react-datocms';
import {Heading, Text} from '..';

type Stat = {
  name: string;
  value: number;
  icon: string;
};

type AboutSectionProperties = {
  heading: string;
  subheading: string;
  image: ResponsiveImageType;
  content: string;
  stats: Stat[];
};

const Stat = ({name, value, icon}: Stat): JSX.Element => {
  const Icon = icons[icon as keyof typeof icons];

  return (
    <div className="flex flex-col items-center">
      <div className="p-4 bg-black/80 rounded-full drop-shadow-2xl">
        <Icon className="w-12 h-12 stroke-current text-brand-gold" />
      </div>
      <div className="flex items-center justify-center space-y-2 flex-wrap">
        <Heading label={`${value}+`} variant="heading-two" element="span" />
        <span>{name}</span>
      </div>
    </div>
  );
};

const AboutSection = ({
  heading,
  image,
  subheading,
  content,
  stats,
}: AboutSectionProperties): JSX.Element => (
  <div className="flex flex-col md:flex-row gap-6">
    <div className="md:w-1/2">
      <Image data={image} className="mx-auto" />
    </div>
    <div className="flex flex-col md:w-1/2 text-center md:text-left">
      <div className="space-y-4">
        <Heading label={subheading} variant="subheading" />
        <Heading label={heading} variant="heading-two" element="h2" />
        <Text>{content}</Text>
      </div>
      <div className="flex flex-col md:flex-row gap-12 md:gap-4 justify-center mt-12 md:mt-4">
        {stats.map((stat) => (
          <Stat key={stat.name} {...stat} />
        ))}
      </div>
    </div>
  </div>
);

export default AboutSection;

export type {AboutSectionProperties as AboutSectionProps};
