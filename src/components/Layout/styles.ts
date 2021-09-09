import styled from 'styled-components';

export const Container = styled.div`
	padding: 24px;
	height: 100vh;

	display: grid;
	grid-template-rows: auto 1fr auto;
`;

export const Main = styled.div``;

export const Header = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 32px;
`;

export const Footer = styled.footer`
	text-align: center;
	font-size: 0.75rem;
`;
