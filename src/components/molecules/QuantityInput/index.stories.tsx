import { Story, Meta } from '@storybook/react';
import React from 'react';

import QuantityInput from '.';

export default {
  title: 'Components/molecules/QuantityInput',
  component: QuantityInput,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <div style={{ padding: '10px' }}>
    <QuantityInput />
  </div>
);
