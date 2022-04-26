import { ComponentMeta, Story } from '@storybook/react';
import { Image, ImageProps } from '.';
import benefitImage from '~/img/common/benefit.png';
import benefit_1Image from '~/img/common/benefit_1.png';
import benefit_2Image from '~/img/common/benefit_2.png';
import ctaImage from '~/img/common/cta.png';
import heroImage from '~/img/common/hero.png';
import logoImage from '~/img/common/logo.png';
import sympathy_1Image from '~/img/common/sympathy_1.png';
import sympathy_2Image from '~/img/common/sympathy_2.png';


export default {
  title: 'atom/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: Story<ImageProps> = (args) => <Image {...args} alt=""/>;

export const Benefit = Template.bind( {} );
Benefit.args = { src:benefitImage, alt:'benefit image'};

export const Benefit_1 = Template.bind( {} );
Benefit_1.args = { src:benefit_1Image, alt:'benefit_1 image'};

export const Benefit_2 = Template.bind( {} );
Benefit_2.args = { src:benefit_2Image, alt:'benefit_2 image'};

export const Cta = Template.bind( {} );
Cta.args = { src:ctaImage, alt:'cta image'};

export const Hero = Template.bind( {} );
Hero.args = { src:heroImage, alt:'hero image'};

export const Logo = Template.bind( {} );
Logo.args = { src:logoImage, alt:'logo image'};

export const Sympathy_1 = Template.bind( {} );
Sympathy_1.args = { src:sympathy_1Image, alt:'Sympathy_1 image'};

export const Sympathy_2 = Template.bind( {} );
Sympathy_2.args = { src:sympathy_2Image, alt:'Sympathy_2 image'};
