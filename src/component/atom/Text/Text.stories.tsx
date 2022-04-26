import { ComponentMeta, Story } from '@storybook/react';
import { Text } from '.';

export default {
  title: 'atom/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: Story = (args) => <Text {...args} />;

// color
export const Primary_50 = Template.bind( {} );
Primary_50.args = { children: <span className='text-primary-50'>text-primary-50</span>};

export const Primary_500 = Template.bind( {} );
Primary_500.args = { children: <span className='text-primary-500'>text-primary-500</span>};

export const Primary_800 = Template.bind( {} );
Primary_800.args = { children: <span className='text-primary-800'>text-primary-800</span>};

export const Black = Template.bind( {} );
Black.args = { children: <span className='text-black'>text-black</span>};

export const Orngae = Template.bind( {} );
Orngae.args = { children: <span className='text-orange'>text-orange</span>};

export const Yellow = Template.bind( {} );
Yellow.args = { children: <span className='text-yellow'>text-yellow</span>};

export const White = Template.bind( {} );
White.args = { children: <span className='text-white'>text-white</span>};

// text-primary
export const Text_primary_xs = Template.bind( {} );
Text_primary_xs.args = { children: <span className='text-primary-xs'>text-xs</span>};

export const Text_primary_sm = Template.bind( {} );
Text_primary_sm.args = { children: <span className='text-primary-sm'>text-sm</span>};

export const Text_primary_base = Template.bind( {} );
Text_primary_base.args = { children: <span className='text-primary-base'>text-base</span>};

export const Text_primary_lg = Template.bind( {} );
Text_primary_lg.args = { children: <span className='text-primary-lg'>text-lg</span>};

export const Text_primary_xl = Template.bind( {} );
Text_primary_xl.args = { children: <span className='text-primary-xl'>text-xl</span>};

export const Text_primary_2xl = Template.bind( {} );
Text_primary_2xl.args = { children: <span className='text-primary-2xl'>text-2xl</span>};

// highlight
export const Highlight_xs = Template.bind( {} );
Highlight_xs.args = { children: <span className='highlight-xs'>text-xs</span>};

export const Highlight_sm = Template.bind( {} );
Highlight_sm.args = { children: <span className='highlight-sm'>text-sm</span>};

export const Highlight_base = Template.bind( {} );
Highlight_base.args = { children: <span className='highlight-base'>text-base</span>};

export const Highlight_lg = Template.bind( {} );
Highlight_lg.args = { children: <span className='highlight-lg'>text-lg</span>};

export const Highlight_xl = Template.bind( {} );
Highlight_xl.args = { children: <span className='highlight-xl'>text-xl</span>};

export const Highlight_2xl = Template.bind( {} );
Highlight_2xl.args = { children: <span className='highlight-2xl'>text-2xl</span>};

// text-white
export const Text_white_xs = Template.bind( {} );
Text_white_xs.args = { children: <span className='text-white-xs'>text-xs</span>};

export const Text_white_sm = Template.bind( {} );
Text_white_sm.args = { children: <span className='text-white-sm'>text-sm</span>};

export const Text_white_base = Template.bind( {} );
Text_white_base.args = { children: <span className='text-white-base'>text-base</span>};

export const Text_white_lg = Template.bind( {} );
Text_white_lg.args = { children: <span className='text-white-lg'>text-lg</span>};

export const Text_white_xl = Template.bind( {} );
Text_white_xl.args = { children: <span className='text-white-xl'>text-xl</span>};

export const Text_white_2xl = Template.bind( {} );
Text_white_2xl.args = { children: <span className='text-white-2xl'>text-2xl</span>};

// text-black
export const Text_black_xs = Template.bind( {} );
Text_black_xs.args = { children: <span className='text-black-xs'>text-xs</span>};

export const Text_black_sm = Template.bind( {} );
Text_black_sm.args = { children: <span className='text-black-sm'>text-sm</span>};

export const Text_black_base = Template.bind( {} );
Text_black_base.args = { children: <span className='text-black-base'>text-base</span>};

export const Text_black_lg = Template.bind( {} );
Text_black_lg.args = { children: <span className='text-black-lg'>text-lg</span>};

export const Text_black_xl = Template.bind( {} );
Text_black_xl.args = { children: <span className='text-black-xl'>text-xl</span>};

export const Text_black_2xl = Template.bind( {} );
Text_black_2xl.args = { children: <span className='text-black-2xl'>text-2xl</span>};

// font-weight
export const Bold = Template.bind( {} );
Bold.args = { children: <span className='font-bold'>font-bold</span>};
