import {LinkType} from '@app/library/types';
import Link from 'next/link';
import {Button} from '.';

type HeaderProperties = {
  links: LinkType[];
};

const Header = ({links}: HeaderProperties): JSX.Element => (
  <nav className="py-6 fixed w-full !max-w-none">
    <div className="flex justify-between container">
      <Link href="/">
        <div>
          <p>LOGO HERE</p>
        </div>
      </Link>
      <ul className="flex space-x-8">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Button.Semantic label="Book Now" />
    </div>
  </nav>
);

export default Header;

export type {HeaderProperties as HeaderProps};
