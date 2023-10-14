import {
  BenefitsSection,
  BookSection,
  Container,
  FeaturedFleet,
  Hero,
  Region,
} from '@app/components/partials';
import homeData from '@app/data/home.json';
import {generateDatoTestImage} from '@growthops/ext-ts';

const HomePage = (): JSX.Element => (
  <div>
    <Hero
      subheading={homeData.hero.subheading}
      heading={homeData.hero.heading}
      synopsis={homeData.hero.synopsis}
      actions={homeData.hero.actions}
      heroImage={generateDatoTestImage(800, 'film', 1025)}
    />
    <Container>
      <BookSection heading="Book a car" />
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
    <Region>
      <Container>
        <FeaturedFleet
          heading={homeData.featuredCars.heading}
          subheading={homeData.featuredCars.subheading}
          content={homeData.featuredCars.content}
          cars={homeData.featuredCars.cars.map((car, index) => ({
            ...car,
            image: generateDatoTestImage(500, 'film', 1022 + index),
          }))}
        />
      </Container>
    </Region>
  </div>
);

export default HomePage;
