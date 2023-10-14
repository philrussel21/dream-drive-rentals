import {useMemo} from 'react';
import {collapse} from '@growthops/ext-ts';

type RegionProperties = {
  children: Array<JSX.Element | boolean> | JSX.Element | boolean;
  className?: string;
  hasTopMargin?: boolean;
  id?: string;
};

const Region = ({
  id,
  children,
  className = '',
  hasTopMargin = true,
}: RegionProperties): JSX.Element => {
  const classes = useMemo(
    () => ({
      root: collapse([hasTopMargin ? 'mt-16 md:mt-20' : '', className]),
    }),
    [hasTopMargin, className]
  );

  return (
    <section id={id} className={classes.root}>
      {children}
    </section>
  );
};

export default Region;

export type {RegionProperties as RegionProps};
