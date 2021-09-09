import { Story, Meta } from '@storybook/react/types-6-0';
import Layout from '.';

export default {
	title: 'Layout',
	component: Layout,
	args: {
		title: 'Layout',
		description: 'Layout',
	},
} as Meta;

export const Basic: Story = () => <Layout />;

