import {Container, Hero, Region} from '@app/components/partials';
import type {ResponsiveImageType} from 'react-datocms';
import {Image} from 'react-datocms';
import ourTeamData from '@app/data/our-team.json';
import {Heading, Text} from '@app/components';

type OurTeamCardProperties = {
	name: string;
	position: string;
	image: ResponsiveImageType;
};

const OurTeamCard = ({name, position, image}: OurTeamCardProperties): JSX.Element => (
	<div>
		<div>
			<Image data={image} className="mx-auto"/>
		</div>
		<div className="text-center px-6 pb-6">
			<Heading label={name} variant="heading-four" element="h4"/>
			<Text>{position}</Text>
		</div>
	</div>
);

const OurTeamPage = (): JSX.Element => {
	return (
		<div>
			<Hero title="Our Team"/>
			<Region>
				<Container className="text-center">
					<div className="space-y-4">
						<Heading
							label="Meet our exceptional team"
							variant="subheading"
							element="span"
						/>
						<Heading
							label="Driven by Excellence, Led by Passion"
							variant="heading-two"
							element="h2"
						/>
						<Text className="max-w-xl mx-auto">
							At Dream Drive Rentals, we take immense pride in our dedicated and
							knowledgeable team of luxury car enthusiasts. Our experts in the
							world of high-end automobiles are committed to providing you with
							the finest driving experience possible. From our experienced
							concierge team ready to assist you with personalized bookings to
							our skilled mechanics ensuring the immaculate condition of our
							fleet, our collective passion for luxury vehicles is evident in
							every aspect of our service. Get to know the Dream Drive Rentals
							team, your partners in indulgence.
						</Text>
					</div>
					<div className="pt-6 pb-20 grid sm:grid-cols-2 md:grid-cols-3 gap-8 ">
						{ourTeamData.map((member) => (
							<OurTeamCard
								key={member.name}
								{...member}
								image={{
									...member.image,
									alt: `${member.name} avatar`,
								}}
							/>
						))}
					</div>
					<a href="https://www.vecteezy.com/free-vector/avatar">
						Avatar Vectors by Vecteezy
					</a>
				</Container>
			</Region>
		</div>
	);
};

export default OurTeamPage;
