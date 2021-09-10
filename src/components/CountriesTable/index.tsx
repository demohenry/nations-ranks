import { CountriesProps } from 'pages';
import * as S from './styles';

const CountriesTable = ({ countries }: CountriesProps) => {
	console.log(countries);
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

			{countries.map((country) => (
				<div key={country.id} className="row">
					<div className="name">{country.name}</div>

					<div className="population">{country.population}</div>
				</div>
			))}
		</S.Wrapper>
	);
};

export default CountriesTable;
