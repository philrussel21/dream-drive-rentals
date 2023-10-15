import {Input, Textarea} from '@app/components';
import {Container, Hero, Region} from '@app/components/partials';
import contactPageData from '@app/data/contact.json';
import {EnvelopeIcon, MapPinIcon, PhoneIcon} from '@heroicons/react/24/outline';

const ContactPage = () => {
  return (
    <div>
      <Hero title="Contact Us" />
      <Region>
        <Container className="py-20 flex flex-col md:flex-row md:justify-between gap-6">
          <div className="md:max-w-md text-center md:text-left space-y-4">
            <h2>{contactPageData.heading}</h2>
            <p>{contactPageData.content}</p>
            <div className="mt-6">
              <div className="flex flex-col items-center lg:items-start space-y-4">
                <a
                  href={`tel:${contactPageData.contact.phone}`}
                  className="flex space-x-2"
                >
                  <PhoneIcon className="w-7" />
                  <span>{contactPageData.contact.phone}</span>
                </a>
                <a
                  href={`mailto:${contactPageData.contact.email}`}
                  className="flex space-x-2"
                >
                  <EnvelopeIcon className="w-7" />
                  <span>{contactPageData.contact.email}</span>
                </a>
                <p className="flex space-x-2">
                  <MapPinIcon className="w-7" />
                  <span>{contactPageData.contact.address}</span>
                </p>
              </div>
            </div>
          </div>
          <form className="w-1/2 bg-white text-black p-10 space-y-8">
            <div>
              <Input required id="name" label="Name" type="text" />
            </div>
            <div>
              <Input required id="email" label="Email" type="email" />
            </div>
            <div>
              <Textarea
                required
                id="message"
                label="Tell us about it"
                rows={5}
              />
            </div>
          </form>
        </Container>
      </Region>
    </div>
  );
};

export default ContactPage;
