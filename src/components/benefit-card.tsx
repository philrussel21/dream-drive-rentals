import icons, {Icon} from '@app/library/icons';

type BenefitProperties = {
  title: string;
  text: string;
  icon: string;
};

const Benefit = ({title, text, icon}: BenefitProperties): JSX.Element => {
  const Icon = icons[icon as keyof typeof icons];

  return (
    <div className="flex flex-col space-y-4 items-center justify-center">
      <Icon className="w-12" />
      <h4>{title}</h4>
      <p className="text-center">{text}</p>
    </div>
  );
};
export default Benefit;

export type {BenefitProperties as BenefitProps};
