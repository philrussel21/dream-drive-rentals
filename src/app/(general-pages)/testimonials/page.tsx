import {Container, FAQs, Hero, Region} from '@app/components/partials';
import faqsData from '@app/data/faqs.json';
import testimonialsData from '@app/data/testimonials.json';

type TestimonialProps = {
  name: string;
  location: string;
  message: string;
};

const Testimonial = ({
  name,
  location,
  message,
}: TestimonialProps): JSX.Element => (
  <div className="bg-white text-black rounded-xl p-6">
    <p>{`"${message}"`}</p>
    <div className="flex flex-col text-left">
      <span>{name}</span>
      <span>{location}</span>
    </div>
  </div>
);

const TestimonialsPage = () => {
  return (
    <div>
      <Hero title="Testimonials" />
      <Region>
        <Container className="text-center">
          <div className="space-y-4">
            <span>Reviewed by people</span>
            <h2>Client Testimonials</h2>
            <p className="max-w-xl mx-auto">
              Discover the positive impact we've made on the our clients by
              reading through their testimonials. Our clients have experienced
              our service and results, and they're eager to share their positive
              experiences with you.
            </p>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsData.map((testimonial) => (
              <Testimonial key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </Container>
      </Region>
      <Region>
        <Container isNarrow>
          <FAQs heading="Frequently Asked Questions" faqs={faqsData} />
        </Container>
      </Region>
    </div>
  );
};

export default TestimonialsPage;
