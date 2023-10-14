import icons from '@app/library/icons';
import {Image, ResponsiveImageType} from 'react-datocms';

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
    <div className="flex flex-col space-y-4 items-center">
      <div>
        <Icon className="w-6" />
      </div>
      <div className="flex items-center justify-center space-x-2">
        <span>{`${value}+`}</span>
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
    <div className="flex flex-col space-y-4 md:w-1/2 text-center md:text-left">
      <span>{subheading}</span>
      <h2>{heading}</h2>
      <p>{content}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {stats.map((stat) => (
          <Stat key={stat.name} {...stat} />
        ))}
      </div>
    </div>
  </div>
);

export default AboutSection;

export type {AboutSectionProperties as AboutSectionProps};
