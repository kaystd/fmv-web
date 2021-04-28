import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { View } from '../src/components/View'
import { ViewProps } from '../src/components/View/View.types'

export default {
  title: 'Example/View',
  component: View,
  argTypes: {
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
  },
} as Meta

const Template: Story<ViewProps> = props => (
    <View {...props}>View</View>
)

export const Primary = Template.bind({})
Primary.args = {
  color: 'blue',
  backgroundColor: 'gray'
} as ViewProps
