import React from 'react';

import { GdGrupoOpcaoProps, GdGrupoOpcoes } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Componentes/GdGrupoOpcoes',
  component: GdGrupoOpcoes,
} as ComponentMeta<typeof GdGrupoOpcoes>;

const Template: ComponentStory<typeof GdGrupoOpcoes> = args => (
  <GdGrupoOpcoes {...args} />
);

export const Padrao = Template.bind({});

Padrao.args = {
  opcoes: [
    {
      id: 1,
      titulo: 'E-book',
      corpo: 'R$ 00,00',
      rodape: '.pdf, .epub, .mob',
    },
    {
      id: 2,
      titulo: 'Impresso',
      corpo: 'R$ 00,00',
      rodape: '.pdf, .epub, .mob',
    },
    {
      id: 3,
      titulo: 'Impresso + E-book',
      corpo: 'R$ 00,00',
      rodape: '.pdf, .epub, .mob',
    },
  ],
} as GdGrupoOpcaoProps;
