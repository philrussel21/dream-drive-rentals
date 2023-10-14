import {LinkType} from '@app/library/types';
import {Container} from '.';
import Link from 'next/link';
import {EnvelopeIcon, MapPinIcon, PhoneIcon} from '@heroicons/react/24/outline';
import {locations} from '@app/config';

type FooterProperties = {
  content: string;
  email: string;
  phone: string;
  address: string;
  links: LinkType[];
};

const Footer = ({
  content,
  email,
  phone,
  address,
  links,
}: FooterProperties): JSX.Element => (
  <footer className="py-16 md:py-24 bg-gray-800 text-center lg:text-left">
    <Container>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-4 lg:gap-x-6 gap-y-6">
        <div className="space-y-6">
          <Link href="/">
            <div>LOGO HERE</div>
          </Link>
          <p>{content}</p>
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <a href={`tel:${phone}`} className="flex space-x-2">
              <PhoneIcon className="w-7" />
              <span>{phone}</span>
            </a>
            <a href={`mailto:${email}`} className="flex space-x-2">
              <EnvelopeIcon className="w-7" />
              <span>{email}</span>
            </a>
            <p className="flex space-x-2">
              <MapPinIcon className="w-7" />
              <span>{address}</span>
            </p>
          </div>
        </div>
        <div>
          <ul className="space-y-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Locations</h3>
          <ul className="space-y-4 mt-6">
            {locations.map((location) => (
              <li key={location}>{location}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Working hours</h3>
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
