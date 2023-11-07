import icons from '@app/library/icons';
import {Heading, Text} from '.';

type PerkCardProperties = {
  title: string;
  text: string;
  icon: string;
};

const PerkCard = ({title, text, icon}: PerkCardProperties): JSX.Element => {
	const Icon = icons[icon as keyof typeof icons];

	return (
		<div className="flex flex-col sm:flex-row gap-6 items-center">
			<div className="p-5 bg-black/80 rounded-full drop-shadow-2xl">
				<Icon className="w-12 h-12"/>
			</div>
			<div className="text-center space-y-4">
				<Heading label={title} variant="heading-five" element="h4"/>
				<Text className="text-center">{text}</Text>
			</div>
		</div>
	);
};

export default PerkCard;

export type {PerkCardProperties as PerkCardProps};
