import { ComponentMeta, Story } from '@storybook/react';
import { Image, ImageProps } from '.';
import heroImage from '~/img/common/hero.png';

export default {
  title: 'atom/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind( {} );
Default.args = { src:heroImage, alt:'sample image'};


