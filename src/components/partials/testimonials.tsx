import {Container} from '.';
import {Carousel, Heading, Testimonial, Text} from '..';

type Testimonial = {
  name: string;
  location: string;
  message: string;
};

type TestimonialsProperties = {
  heading: string;
  subheading: string;
  content: string;
  testimonials: Testimonial[];
};

const Testimonials = ({
  heading,
  subheading,
  content,
  testimonials,
}: TestimonialsProperties): JSX.Element => (
  <div className="bg-brand-off-white py-16 text-black">
    <Container>
      <div className="text-center">
        <Heading label={subheading} variant="subheading" />
        <Heading label={heading} variant="heading-two" element="h2" />
        <Text className="max-w-lg mx-auto mt-6">{content}</Text>
      </div>
      <div className="mt-10">
        <Carousel>
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="max-w-lg">
              <Testimonial {...testimonial} />
            </div>
          ))}
        </Carousel>
      </div>
    </Container>
  </div>
);

export default Testimonials;

export type {TestimonialsProperties as TestimonialsProps};
