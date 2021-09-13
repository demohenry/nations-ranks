import { CountriesProps } from 'pages';
import * as S from './styles';

const orderBy = ({ countries }: CountriesProps, direction: string) => {
	if (direction === 'asc') {
		return [...countries].sort((a, b) =>
			a.population > b.population ? 1 : -1
		);
	}

	if (direction === 'desc') {
		return [...countries].sort((a, b) =>
			a.population > b.population ? -1 : 1
		);
	}

	return countries;
};

const CountriesTable = ({ countries }: CountriesProps) => {
	const orderedCountries = orderBy({ countries }, 'desc');

	return (
		<S.Wrapper>
			<S.Heading>
				<button className="heading-name">
					<div>Nome</div>
				</button>

				<button className="heading-population">
					<div>População</div>
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
