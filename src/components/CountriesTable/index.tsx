import {
	KeyboardArrowDownRounded,
	KeyboardArrowUpRounded,
} from '@material-ui/icons';
import { CountriesProps } from 'pages';
import { useState } from 'react';
import * as S from './styles';

type DirectionProp = {
	direction: string | null;
};

const orderBy = ({ countries }: CountriesProps, value, direction: string) => {
	if (direction === 'asc') {
		return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
	}

	if (direction === 'desc') {
		return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1));
	}

	return countries;
};

const SortArrow = ({ direction }: DirectionProp) => {
	if (!direction) {
		return <></>;
	}

	if (direction === 'desc') {
		return (
			<div className="heading-arrow">
				<KeyboardArrowDownRounded color="inherit" />
			</div>
		);
	} else {
		return (
			<div className="heading-arrow">
				<KeyboardArrowUpRounded color="inherit" />
			</div>
		);
	}
};

const CountriesTable = ({ countries }: CountriesProps) => {
	const [direction, setDirection] = useState<string | null>('desc');
	const [value, setValue] = useState();

	const orderedCountries = orderBy({ countries }, value, direction);

	const switchDirection = () => {
		if (!direction) {
			setDirection('desc');
		} else if (direction === 'desc') {
			setDirection('asc');
		} else {
			setDirection(null);
		}
	};

	const setValueAndDirection = (value) => {
		switchDirection();
		setValue(value);
	};

	return (
		<S.Wrapper>
			<S.Heading>
				<button
					className="heading-name"
					onClick={() => setValueAndDirection('name')}
				>
					<div>Nome</div>

					<SortArrow direction={null} />
				</button>

				<button
					className="heading-population"
					onClick={() => setValueAndDirection('population')}
				>
					<div>População</div>

					<div className="heading-arrow">
						<SortArrow direction={direction} />
					</div>
				</button>
			</S.Heading>

			{orderedCountries.map((country) => (
				<div key={country.id} className="row">
					<div className="name">{country.name}</div>

					<div className="population">{country.population}</div>
				</div>
			))}
		</S.Wrapper>
	);
};

export default CountriesTable;
