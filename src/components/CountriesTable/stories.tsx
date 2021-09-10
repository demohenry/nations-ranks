import { Story, Meta } from '@storybook/react/types-6-0';
import CountriesTable from '.';

export default {
	title: 'CountriesTable',
	component: CountriesTable,
	args: {
		title: 'CountriesTable',
		description: 'CountriesTable',
	},
} as Meta;

export const Basic: Story = () => <CountriesTable />;

