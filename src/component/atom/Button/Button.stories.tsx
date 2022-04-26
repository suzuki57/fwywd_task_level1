import { ComponentMeta, Story } from '@storybook/react';
import { Button } from '.';

export default {
  title: 'atom/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: Story = (args) => <Button {...args} />;

export const Primary = Template.bind( {} );
Primary.args = { children: <button className='btn btn-primary'>button</button>};

export const Orange = Template.bind( {} );
Orange.args = { children: <button className='btn btn-orange'>button</button>};

export const Btn = Template.bind( {} );
Btn.args = { children: <button className='btn'>button</button>};

