import {BenefitsSection, BookSection, Callout, Container, FAQs, FeaturedFleet, HomeHero as Hero, Region, Testimonials, WhyUs} from '@app/components/partials';
import homeData from '@app/data/home.json';
import testimonials from '@app/data/testimonials.json';
import calloutData from '@app/data/callout.json';
import faqs from '@app/data/faqs.json';

const HomePage = (): JSX.Element => (
	<div>
		<Hero
			subheading={homeData.hero.subheading}
			heading={homeData.hero.heading}
			synopsis={homeData.hero.synopsis}
			actions={homeData.hero.actions}
			heroImage={{
				src: 'images/merc-eqe-300.png',
				width: 900,
				aspectRatio: 1.8,
			}}
		/>
		<Container className="-translate-y-16 md:-translate-y-1/4">
			<BookSection heading="Book a car"/>
		</Container>
		<Region>
			<Container>
				<BenefitsSection
					subheading={homeData.benefits.subheading}
					heading={homeData.benefits.heading}
					benefits={homeData.benefits.benefits}
				/>
			</Container>
		</Region>
		<Region className="bg-brand-off-white py-16">
			<Container>
				<FeaturedFleet
					heading={homeData.featuredCars.heading}
					subheading={homeData.featuredCars.subheading}
					content={homeData.featuredCars.content}
					cars={homeData.featuredCars.cars.map((car) => ({
						...car,
						image: {
							src: car.image.src,
							aspectRatio: car.image.aspectRatio,
							width: 700,
							alt: car.image.alt,
						},
					}))}
				/>
			</Container>
		</Region>
		<Callout
			heading={calloutData.heading}
			content={calloutData.content}
			actions={calloutData.actions}
		/>
		<Region>
			<Container>
				<WhyUs
					heading={homeData.whyUs.heading}
					subheading={homeData.whyUs.subheading}
					content={homeData.whyUs.content}
					image={{
						src: 'images/car-group.png',
						alt: 'Group of luxury cars',
						aspectRatio: 3.2,
						width: 1600,
					}}
					perks={homeData.whyUs.perks}
				/>
			</Container>
		</Region>
		<Region>
			<Testimonials
				heading={homeData.testimonials.heading}
				subheading={homeData.testimonials.subheading}
				content={homeData.testimonials.content}
				testimonials={testimonials}
			/>
		</Region>
		<Region className="pb-20">
			<Container isNarrow>
				<FAQs heading="Frequently Asked Questions" faqs={faqs}/>
			</Container>
		</Region>
	</div>
);

export default HomePage;
