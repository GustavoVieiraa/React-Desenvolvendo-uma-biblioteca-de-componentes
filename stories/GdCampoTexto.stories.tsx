import React from 'react';

import { GdCampoTextoProps, GdCampoTexto } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Componentes/GdCampoTexto',
  component: GdCampoTexto,
  argTypes: {
    label: {
      control: 'text',
    },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof GdCampoTexto>;

const Template: ComponentStory<typeof GdCampoTexto> = args => (
  <GdCampoTexto {...args} />
);

export const GdCampoTextoComponent = Template.bind({});

GdCampoTextoComponent.args = {
  label: 'E-mail',
} as GdCampoTextoProps;
