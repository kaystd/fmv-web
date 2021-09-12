import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Button, ButtonProps } from '../src/components/Button'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
  },
} as Meta;

const DefaultTemplate: Story<ButtonProps> = props => (
  <Button {...props}>Default</Button>
);

const CustomTemplate: Story<ButtonProps> = props => (
  <Button {...props}>Custom</Button>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  children: 'Default',
};

export const Custom = CustomTemplate.bind({});
Custom.args = {
  children: 'Custom',
  color: 'blue',
  backgroundColor: 'white',
  borderColor: 'blue',
  borderColorOnFocus: 'red',
  ph: '3vw',
  pv: '3vh',
  ma: '2rem',
};
