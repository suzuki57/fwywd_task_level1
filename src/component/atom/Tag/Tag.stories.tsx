import { ComponentMeta, Story } from '@storybook/react';
import { Tag } from '.';

export default {
  title: 'atom/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: Story = (args) => <Tag {...args} />;

export const Tag_lg = Template.bind( {} );
Tag_lg.args = { children: <span className='tag'>Tag</span>};


