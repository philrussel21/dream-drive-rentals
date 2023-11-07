import icons from '@app/library/icons';
import {Heading, Text} from '.';

type BenefitProperties = {
  title: string;
  text: string;
  icon: string;
};

const Benefit = ({title, text, icon}: BenefitProperties): JSX.Element => {
	const Icon = icons[icon as keyof typeof icons];

	return (
		<div className="flex flex-col space-y-4 items-center justify-center">
			<div className="p-4 bg-black/80 rounded-full drop-shadow-2xl">
				<Icon className="w-12 h-12"/>
			</div>
			<Heading label={title} variant="heading-five" element="h4"/>
			<Text className="text-center">{text}</Text>
		</div>
	);
};

export default Benefit;

export type {BenefitProperties as BenefitProps};
