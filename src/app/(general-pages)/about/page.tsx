import {AboutSection, BenefitsSection, Container, Hero, Region} from '@app/components/partials';
import aboutPageData from '@app/data/about.json';

const AboutPage = (): JSX.Element => {
	return (
		<div>
			<Hero title="About"/>
			<Region>
				<Container isNarrow>
					<AboutSection
						heading={aboutPageData.about.heading}
						subheading={aboutPageData.about.subheading}
						image={{
							src: 'images/about.png',
							alt: 'About us image',
							width: 400,
							aspectRatio: 0.75,
						}}
						content={aboutPageData.about.content}
						stats={aboutPageData.about.stats}
					/>
				</Container>
			</Region>
			<Region>
				<Container>
					<BenefitsSection
						subheading={aboutPageData.benefits.subheading}
						heading={aboutPageData.benefits.heading}
						benefits={aboutPageData.benefits.benefits}
					/>
				</Container>
			</Region>
		</div>
	);
};

export default AboutPage;
