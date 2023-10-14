import {Link as LinkType} from '@app/library/types';
import Link from 'next/link';

type HeaderProperties = {
  links: LinkType[];
};

const Header = ({links}: HeaderProperties): JSX.Element => (
  <nav className="flex container justify-between py-6">
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
    <div>Button here</div>
  </nav>
);

export default Header;

export type {HeaderProperties as HeaderProps};
