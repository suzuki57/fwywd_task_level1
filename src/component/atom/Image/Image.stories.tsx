import { ComponentMeta, Story } from '@storybook/react';
import { Image, ImageProps } from '.';
import sampleImage from '~/img/common/hero.png';

export default {
  title: 'atom/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind( {} );
Default.args = { src:sampleImage, alt:'sample image'};

export const Resize = Template.bind( {} );
Resize.args = { src:sampleImage, alt:'sample image', width:200, height:200};


