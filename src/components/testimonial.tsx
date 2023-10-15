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

export default Testimonial;
