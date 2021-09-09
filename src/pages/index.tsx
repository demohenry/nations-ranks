import Layout from 'components/Layout';
import SearchInput from 'components/SearchInput';

import * as S from 'styles/Home.modules';

export type ContriesProps = {
	countries: [];
};

export default function Home({ countries }: ContriesProps) {
	// console.log(countries);
	return (
		<Layout>
			<S.Wrapper>Encontrados {countries.length} países</S.Wrapper>

			<SearchInput placeholder="Filtrar por Nome, Região ou Subregião" />
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
