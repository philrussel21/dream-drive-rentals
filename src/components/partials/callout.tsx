import {LinkType} from '@app/library/types';
import {isPopulated} from '@growthops/ext-ts';
import Link from 'next/link';
import {Button} from '..';

type CalloutProperties = {
  heading: string;
  content: string;
  actions: LinkType[];
};

const Callout = ({
  heading,
  content,
  actions,
}: CalloutProperties): JSX.Element => (
  <div className="text-center bg-white text-black space-y-8 px-4 py-12">
    <h3>{heading}</h3>
    <p className="max-w-xl mx-auto">{content}</p>
    {isPopulated(actions) && (
      <div className="flex space-x-6 justify-center">
        {actions.map((action, index) => (
          <Link passHref legacyBehavior href={action.href} key={action.href}>
            <Button.Link
              label={action.label}
              variant={index % 2 === 0 ? 'primary' : 'secondary'}
            />
          </Link>
        ))}
      </div>
    )}
  </div>
);

export default Callout;

export type {CalloutProperties as CalloutProps};
