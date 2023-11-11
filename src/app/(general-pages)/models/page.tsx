import {CarCard} from '@app/components';
import {Container, Hero, Region} from '@app/components/partials';
import cars from '@app/data/cars.json';

const VehicleModelsPage = (): JSX.Element => {
	return (
		<div>
			<Hero title="Vehicle Models"/>
			<Region>
				<Container className="flex flex-col gap-8 md:flex-row">
					<div>Filters here</div>
					<ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
						{cars.map(car => (
							<CarCard
								key={car.id}
								{...car}
								image={{
									...car.image,
									width: 800,
									aspectRatio: 2,
								}}
							/>
						))}
					</ul>
				</Container>
			</Region>
		</div>
	);
};

export default VehicleModelsPage;
