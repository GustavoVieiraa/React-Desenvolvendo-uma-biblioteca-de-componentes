import React from 'react';

import { GdGrupoOpcoes } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Componentes/GdGrupoOpcoes',
  component: GdGrupoOpcoes,
} as ComponentMeta<typeof GdGrupoOpcoes>;

const Template: ComponentStory<typeof GdGrupoOpcoes> = () => <GdGrupoOpcoes />;

export const Padrao = Template.bind({});

Padrao.args = {};
