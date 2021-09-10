import styled from 'styled-components';

export const Wrapper = styled.div`
	.row {
		display: flex;
		padding: 20px;

		text-align: center;

		background-color: var(--background-color-light);
		border-radius: 8px;
		margin-bottom: 16px;

		box-shadow: var(--box-shadow);
		font-weight: 500;

		transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;
	}

	.row:hover {
		transform: translateY(-4px);
		box-shadow: 0px 4px 16px rgba(0, 0, 0.1);
	}

	.name {
		flex: 1;
		text-align: left;
	}
	.population {
		flex: 1;
	}
`;

export const Heading = styled.div`
	display: flex;

	button {
		border: none;
		background-color: transparent;
		outline: none;
		cursor: pointer;
	}

	.heading-name {
		flex: 1;
		padding: 20px;
		color: var(--text-color-secondary);
		font-weight: 500;
		text-align: left;
	}
	.heading-population {
		flex: 1;
		padding: 20px;
		color: var(--text-color-secondary);
		font-weight: 500;
	}
`;
