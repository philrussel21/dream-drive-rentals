type HeroProperties = {
  title: string;
};

const Hero = ({title}: HeroProperties): JSX.Element => (
  <div className="pt-40 pb-32 text-center">
    <h1>{title}</h1>
  </div>
);

export default Hero;

export type {HeroProperties as HeroProps};
