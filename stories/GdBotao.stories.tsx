import React from 'react';

import { GdBotao, GdBotaoProps } from '../src';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Componentes/GdBotao',
  component: GdBotao,
} as ComponentMeta<typeof GdBotao>;

const Template: ComponentStory<typeof GdBotao> = args => <GdBotao {...args} />;

export const Primario = Template.bind({});

Primario.args = {
  texto: 'Gd Botão Primário',
  tipo: 'primario',
} as GdBotaoProps;

export const Secundario = Template.bind({});

Secundario.args = {
  texto: 'Gd Botão Secundário',
  tipo: 'secundario',
} as GdBotaoProps;
