import type {LinkType} from '@app/library/types';
import {isPopulated} from '@growthops/ext-ts';
import Link from 'next/link';
import {Button, Heading, Text} from '..';
import type {ResponsiveImageType} from 'react-datocms';
import {Image} from 'react-datocms';
import {City} from '../svgs';

type HeroProperties = {
  heading: string;
  subheading: string;
  synopsis: string;
  heroImage: ResponsiveImageType;
  actions: LinkType[];
};

const HomeHero = ({heading, subheading, synopsis, heroImage, actions}: HeroProperties): JSX.Element => (
	<section className="h-screen flex justify-center items-center bg-brand-off-white relative overflow-hidden">
		<div className="flex flex-col md:flex-row-reverse container">
			<div className="relative flex items-end md:ml-24 mb-20 md:mb-0">
				<City className="absolute bottom-0 left-0 right-0 scale-150"/>
				<Image priority data={heroImage} className="object-center relative"/>
			</div>
			<div className="flex flex-col justify-center">
				<Heading label={subheading} variant="subheading"/>
				<Heading label={heading} variant="headline" element="h1"/>
				<Text className="mt-5">{synopsis}</Text>
				{isPopulated(actions) && (
					<div className="flex space-x-8 mt-5">
						{actions.map((action) => (
							<Link
								key={action.href}
								passHref
								legacyBehavior
								href={action.href}
							>
								<Button.Link label={action.label}/>
							</Link>
						))}
					</div>
				)}
			</div>
		</div>
	</section>
);

export default HomeHero;

export type {HeroProperties as HeroProps};
