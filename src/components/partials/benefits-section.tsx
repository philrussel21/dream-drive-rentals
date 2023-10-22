import {BenefitProps} from '../benefit-card';
import {BenefitCard, Heading} from '..';

type BenefitsSectionProperties = {
  heading: string;
  subheading: string;
  benefits: BenefitProps[];
};

const BenefitsSection = ({
  heading,
  subheading,
  benefits,
}: BenefitsSectionProperties): JSX.Element => (
  <div className="text-center">
    <Heading label={subheading} variant="subheading" />
    <Heading label={heading} variant="heading-two" element="h2" />
    <div className="flex flex-col gap-12 sm:flex-row sm:flex-wrap justify-center items-center mt-16">
      {benefits.map((benefit) => (
        <div key={benefit.title} className="max-w-xs">
          <BenefitCard {...benefit} />
        </div>
      ))}
    </div>
  </div>
);

export default BenefitsSection;

export type {BenefitsSectionProperties as BenefitsSectionProps};
