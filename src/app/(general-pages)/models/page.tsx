import {Container, Hero, Region} from '@app/components/partials';

const VehicleModelsPage = (): JSX.Element => {
	return (
		<div>
			<Hero title="Vehicle Models"/>
			<Region>
				<Container>
					<div>Filters here</div>
					<div>Vehicle Models here</div>
				</Container>
			</Region>
		</div>
	);
};

export default VehicleModelsPage;
