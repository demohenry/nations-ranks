import CountriesTable from 'components/CountriesTable';
import Layout from 'components/Layout';
import SearchInput from 'components/SearchInput';

import * as S from 'styles/Home.modules';

export type CountriesProps = {
	countries: [
		{
			id: number;
			name: string;
			population: number;
		}
	];
};

export default function Home({ countries }: CountriesProps) {
	return (
		<Layout>
			<S.Wrapper>Encontrados {countries.length} países</S.Wrapper>

			<SearchInput placeholder="Filtrar por Nome, Região ou Subregião" />

			<CountriesTable countries={countries} />
		</Layout>
	);
}

export const getStaticProps = async () => {
	const res = await fetch('https://restcountries.eu/rest/v2/all');
	const countries = await res.json();

	return {
		props: {
			countries,
		},
	};
};
