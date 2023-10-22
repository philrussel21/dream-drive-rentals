import {Heading, Text} from '.';

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
  <div className="bg-white text-black rounded-xl p-8 drop-shadow-xl">
    <Text variant="text-lead">{`"${message}"`}</Text>
    <div className="flex flex-col text-left mt-6">
      <Heading variant="heading-six" label={name} />
      <span>{location}</span>
    </div>
  </div>
);

export default Testimonial;
