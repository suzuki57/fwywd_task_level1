import { ComponentMeta, Story } from '@storybook/react';
import { Tag } from '.';

export default {
  title: 'atom/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: Story = (args) => <Tag {...args} />;

export const Primary = Template.bind( {} );
Primary.args = { children: <button className='btn btn-primary'>button</button>};

export const Orange = Template.bind( {} );
Orange.args = { children: <button className='btn btn-orange'>button</button>};

export const Btn = Template.bind( {} );
Btn.args = { children: <button className='btn'>button</button>};

