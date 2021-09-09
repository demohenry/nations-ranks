import SearchRounded from '@material-ui/icons/SearchRounded';

import * as S from './styles';

const SearchInput = ({ ...rest }) => (
	<S.Wrapper>
		<SearchRounded color="inherit" />
		<input {...rest} />
	</S.Wrapper>
);

export default SearchInput;
