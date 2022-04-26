import { ComponentMeta, Story } from '@storybook/react';
import { Buttom } from '.';

export default {
  title: 'atom/Buttom',
  component: Buttom,
} as ComponentMeta<typeof Buttom>;

const Template: Story = (args) => <Buttom {...args} />;

// color
export const Primary_50 = Template.bind( {} );
Primary_50.args = { children: <span className='text-primary-50'>text-primary-50</span>};
