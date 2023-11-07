import {Fragment} from 'react';
import {Callout, Region} from '@app/components/partials';
import calloutData from '@app/data/callout.json';

const GeneralPageLayout = ({children}: {children: React.ReactNode}): JSX.Element => (
	<Fragment>
		{children}
		<Region>
			<Callout
				heading={calloutData.heading}
				content={calloutData.content}
				actions={calloutData.actions}
			/>
		</Region>
	</Fragment>
);

export default GeneralPageLayout;
