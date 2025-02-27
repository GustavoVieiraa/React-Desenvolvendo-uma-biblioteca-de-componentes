import React from 'react';

import { InputQuantidade, InputQuantidadeProps } from '../src';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Componentes/InputQuantidade',
  component: InputQuantidade,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof InputQuantidade>;

const Template: ComponentStory<typeof InputQuantidade> = args => (
  <InputQuantidade {...args} />
);

export const InputQuantidadeComponent = Template.bind({});

InputQuantidadeComponent.args = {
  label: 0,
} as InputQuantidadeProps;
