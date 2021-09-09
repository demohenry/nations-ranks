import {
	createGlobalStyle,
	css,
	DefaultTheme,
	GlobalStyleComponent,
} from 'styled-components';

type GlobalStylesProps = {
	removeBg?: boolean;
};

const GlobalStyles: GlobalStyleComponent<
	GlobalStylesProps,
	DefaultTheme
> = createGlobalStyle`
	@font-face {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 300;
		font-display: swap;
		src: local(''),
				url('/fonts/poppins-v15-latin-300.woff2') format('woff2'),
	}
	@font-face {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: local(''),
				url('/fonts/poppins-v15-latin-regular.woff2') format('woff2'),
	}
	@font-face {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 600;
		font-display: swap;
		src: local(''),
				url('/fonts/poppins-v15-latin-600.woff2') format('woff2'),
}

	:root {
		--text-color: #124a63;
		--text-secondary: #b3c5cd;

		--primary-color: #21b6b7;

		--background-color: #f9f9f9;
		--background-color-light: #eef3f6;
		--background-color-dark: white;

		--font-family: "Poppins", sans-serif;
		--box-shadow: 0px 2px 8px rgba(0, 0, 0.05);
	}

  * {
		color: inherit;
		font: inherit;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
  }

	${({ theme }) => css`
		html {
			font-size: 62.5%;
		}

		body {
			font-family: ${theme.font.family};
			font-size: ${theme.font.sizes.medium};
			background-color: var(--background-color);
			color: var(--text-color);
		}
	`}
`;

export default GlobalStyles;
