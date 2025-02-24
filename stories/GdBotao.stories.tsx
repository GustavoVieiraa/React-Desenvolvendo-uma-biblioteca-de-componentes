import React from 'react';

import { GdBotao } from '../src';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Componentes/GdBotao',
  component: GdBotao,
} as ComponentMeta<typeof GdBotao>;

const Template: ComponentStory<typeof GdBotao> = () => <GdBotao />;

export const Primario = Template.bind({});
