import { ComponentMeta, Story } from '@storybook/react';
import { Text } from '.';

export default {
  title: 'atom/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: Story = (args) => <Text {...args} />;

export const ExtraSmall = Template.bind( {} );
ExtraSmall.args = { children: <span className='text-xs'>text-xs</span>};
