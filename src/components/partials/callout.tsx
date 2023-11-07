import type {LinkType} from '@app/library/types';
import {isPopulated} from '@growthops/ext-ts';
import Link from 'next/link';
import {Button, Heading, Text} from '..';

type CalloutProperties = {
  heading: string;
  content: string;
  actions: LinkType[];
};

const Callout = ({heading, content, actions}: CalloutProperties): JSX.Element => (
	<div className="text-center bg-brand-charcoal text-brand-platinum space-y-8 px-4 py-12">
		<Heading label={heading} variant="headline" element="h3"/>
		<Text variant="text-lead" className="max-w-xl mx-auto">
			{content}
		</Text>
		{isPopulated(actions) && (
			<div className="flex space-x-6 justify-center">
				{actions.map((action, index) => (
					<Link key={action.href} passHref legacyBehavior href={action.href}>
						<Button.Link
							label={action.label}
							variant={index % 2 === 0 ? 'primary' : 'secondary'}
						/>
					</Link>
				))}
			</div>
		)}
	</div>
);

export default Callout;

export type {CalloutProperties as CalloutProps};
