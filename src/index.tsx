import React, { FC, HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

export const Thing: FC<Props> = ({ children }) => {
  return <div>{children || `the snozzberries taste like snozzberries`}</div>;
};

export * from './Components/GdBotao/GdBotao';
export * from './Components/Card/Card';
export * from './Components/GdTag/GdTag';
export * from './Components/GdGrupoOpcoes/GdGrupoOpcoes';
