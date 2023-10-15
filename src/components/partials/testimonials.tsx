import {Container} from '.';
import {Carousel, Testimonial} from '..';

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
  <div className="bg-gray-200 py-10 text-black">
    <Container>
      <div className="text-center space-y-4">
        <span>{subheading}</span>
        <h2>{heading}</h2>
        <p className="max-w-lg mx-auto">{content}</p>
      </div>
      <div className="mt-6">
        <Carousel>
          {testimonials.map((testimonial) => (
            <div className="max-w-md">
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
