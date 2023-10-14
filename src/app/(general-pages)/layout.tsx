import {Fragment} from 'react';
import {Callout} from '@app/components/partials';
import calloutData from '@app/data/callout.json';

const GeneralPageLayout = ({children}: {children: React.ReactNode}) => (
  <Fragment>
    {children}
    <Callout
      heading={calloutData.heading}
      content={calloutData.content}
      actions={calloutData.actions}
    />
  </Fragment>
);

export default GeneralPageLayout;
