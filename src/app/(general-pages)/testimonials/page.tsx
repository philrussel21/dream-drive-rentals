import {Heading, Testimonial, Text} from '@app/components';
import {Container, FAQs, Hero, Region} from '@app/components/partials';
import faqsData from '@app/data/faqs.json';
import testimonialsData from '@app/data/testimonials.json';

const TestimonialsPage = (): JSX.Element => {
	return (
		<div>
			<Hero title="Testimonials"/>
			<Region>
				<Container className="text-center">
					<div className="space-y-4">
						<Heading
							label="Reviewed by people"
							variant="subheading"
							element="span"
						/>
						<Heading
							label="Customer Feedback"
							variant="heading-two"
							element="h2"
						/>
						<Text className="max-w-xl mx-auto">
              Discover the positive impact we&apos;ve made on the our clients by
              reading through their testimonials. Our clients have experienced
              our service and results, and they&apos;re eager to share their positive
              experiences with you.
						</Text>
					</div>
					<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{testimonialsData.map((testimonial) => (
							<Testimonial key={testimonial.name} {...testimonial}/>
						))}
					</div>
				</Container>
			</Region>
			<Region>
				<Container isNarrow>
					<FAQs heading="Frequently Asked Questions" faqs={faqsData}/>
				</Container>
			</Region>
		</div>
	);
};

export default TestimonialsPage;
