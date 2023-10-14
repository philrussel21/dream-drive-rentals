import {Container} from '.';
import {Carousel} from '..';

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

const Testimonial = ({name, location, message}: Testimonial): JSX.Element => (
  <div className="p-5 bg-white rounded-md max-w-md">
    <p>{`"${message}"`}</p>
    <div className="flex flex-col space-y-2 mt-4">
      <span>{name}</span>
      <span>{location}</span>
    </div>
  </div>
);

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
            <Testimonial {...testimonial} />
          ))}
        </Carousel>
      </div>
    </Container>
  </div>
);

export default Testimonials;

export type {TestimonialsProperties as TestimonialsProps};
