import {BenefitProps} from '../benefit-card';
import {BenefitCard} from '..';

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
    <span>{subheading}</span>
    <h2>{heading}</h2>
    <div className="flex flex-col gap-12 sm:flex-row sm:flex-wrap justify-center items-center mt-12">
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
