import React from 'react';
import { GdTag, GdTagProps } from '../src/Components/GdTag/GdTag';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Componentes/GdTag',
  component: GdTag,
} as ComponentMeta<typeof GdTag>;

const Template: ComponentStory<typeof GdTag> = args => <GdTag {...args} />;

export const Primario = Template.bind({});

Primario.args = {
  texto: 'Tag',
} as GdTagProps;
