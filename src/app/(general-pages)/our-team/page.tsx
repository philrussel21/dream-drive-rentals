import {Container, Hero, Region} from '@app/components/partials';
import {Image, ResponsiveImageType} from 'react-datocms';
import ourTeamData from '@app/data/our-team.json';
import {generateDatoTestImage} from '@growthops/ext-ts';

type OurTeamCardProps = {
  name: string;
  position: string;
  image: ResponsiveImageType;
};

const OurTeamCard = ({name, position, image}: OurTeamCardProps) => (
  <div>
    <div>
      <Image data={image} className="mx-auto" />
    </div>
    <div className="text-center p-6">
      <h4>{name}</h4>
      <p>{position}</p>
    </div>
  </div>
);

const OurTeamPage = () => {
  return (
    <div>
      <Hero title="Our Team" />
      <Region>
        <Container className="py-20 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ourTeamData.map((member) => (
            <OurTeamCard
              key={member.name}
              {...member}
              image={generateDatoTestImage(350, 'portrait', 1025)}
            />
          ))}
        </Container>
      </Region>
    </div>
  );
};

export default OurTeamPage;
