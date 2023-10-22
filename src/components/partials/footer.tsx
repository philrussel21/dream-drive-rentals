import {LinkType} from '@app/library/types';
import {Container} from '.';
import Link from 'next/link';
import {EnvelopeIcon, MapPinIcon, PhoneIcon} from '@heroicons/react/24/outline';
import {locations} from '@app/config';
import {Heading, Text} from '..';

type FooterProperties = {
  content: string;
  email: string;
  phone: string;
  address: string;
  links: LinkType[];
};

const iconClasses = 'w-7 text-brand-gold';

const Footer = ({
  content,
  email,
  phone,
  address,
  links,
}: FooterProperties): JSX.Element => (
  <footer className="py-16 md:py-24 bg-brand-charcoal text-center lg:text-left text-brand-off-white">
    <Container>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-4 lg:gap-x-6 gap-y-6">
        <div className="space-y-6">
          <Link href="/">
            <div>LOGO HERE</div>
          </Link>
          <Text>{content}</Text>
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <a
              href={`tel:${phone}`}
              className="flex space-x-2 hover:text-brand-gold"
            >
              <PhoneIcon className={iconClasses} />
              <Text>{phone}</Text>
            </a>
            <a
              href={`mailto:${email}`}
              className="flex space-x-2 hover:text-brand-gold"
            >
              <EnvelopeIcon className={iconClasses} />
              <Text>{email}</Text>
            </a>
            <p className="flex space-x-2">
              <MapPinIcon className={iconClasses} />
              <Text>{address}</Text>
            </p>
          </div>
        </div>
        <div>
          <ul className="space-y-4 lg:ml-12">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand-gold">
                  <Text variant="text-lead" element="span">
                    {link.label}
                  </Text>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Heading variant="heading-six" element="h3" label="Locations" />
          <ul className="space-y-4 mt-6">
            {locations.map((location) => (
              <li key={location}>{location}</li>
            ))}
          </ul>
        </div>
        <div>
          <Heading variant="heading-six" element="h3" label="Working hours" />
          <ul className="space-y-4 mt-6">
            <li>Monday - Friday: 9:00 - 18:00</li>
            <li>Saturday: 10:00 - 16:00</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;

export type {FooterProperties as FooterProps};
