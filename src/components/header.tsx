'use client';

import {LinkType} from '@app/library/types';
import Link from 'next/link';
import {Button} from '.';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import {useCallback, useState} from 'react';

type HeaderProperties = {
  links: LinkType[];
};

type MobileNavigationProps = {
  links: LinkType[];
  onClose: () => void;
};

const MobileNavigation = ({
  links,
  onClose,
}: MobileNavigationProps): JSX.Element => (
  <div className="md:hidden fixed z-50 bg-white inset-0 text-black">
    <div className="w-full h-full bg-gray-300 relative flex justify-center items-center">
      <ul className="flex flex-col space-y-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="absolute top-0 right-0 -translate-x-8 translate-y-8"
        onClick={onClose}
      >
        <XMarkIcon className="w-12" />
      </button>
    </div>
  </div>
);

const Header = ({links}: HeaderProperties): JSX.Element => {
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);

  const handleMobileNavigationOpen = useCallback(() => {
    setIsMobileNavigationOpen(true);
  }, []);

  const handleMobileNavigationClose = useCallback(() => {
    setIsMobileNavigationOpen(false);
  }, []);

  return (
    <nav className="py-6 fixed w-full !max-w-none z-50">
      <div className="flex justify-between container">
        <Link href="/">
          <div>
            <p>LOGO HERE</p>
          </div>
        </Link>
        <div className="md:hidden">
          <button type="button" onClick={handleMobileNavigationOpen}>
            <span className="sr-only">Open Mobile Navigation</span>
            <Bars3Icon className="w-6" />
          </button>
        </div>
        {isMobileNavigationOpen && (
          <MobileNavigation
            links={links}
            onClose={handleMobileNavigationClose}
          />
        )}
        <ul className="space-x-8 hidden md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <Button.Semantic label="Book Now" />
        </div>
      </div>
    </nav>
  );
};

export default Header;

export type {HeaderProperties as HeaderProps};
