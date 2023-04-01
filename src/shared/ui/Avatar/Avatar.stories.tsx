import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AvatarImg from 'shared/assets/img/storybook.jpg';

import { Avatar } from './Avatar';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      type: 'number',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Avatar>;

const Primary: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;
export const Template = Primary.bind({});
Template.args = {
  alt: 'story avatar',
  src: AvatarImg,
};
