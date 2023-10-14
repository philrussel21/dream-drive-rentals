import icons from '@app/library/icons';

type PerkCardProperties = {
  title: string;
  text: string;
  icon: string;
};

const PerkCard = ({title, text, icon}: PerkCardProperties): JSX.Element => {
  const Icon = icons[icon as keyof typeof icons];

  return (
    <div className="flex flex-col sm:flex-row gap-6 items-center">
      <div>
        <Icon className="w-12" />
      </div>
      <div className="text-center space-y-6">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};
export default PerkCard;

export type {PerkCardProperties as PerkCardProps};
