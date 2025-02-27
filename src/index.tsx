import React, { FC, HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

export const Thing: FC<Props> = ({ children }) => {
  return (
    <div>
      {children || <h1>Esse é o StoryBook de Componentes da minha empresa.</h1>}
    </div>
  );
};

export * from './Components/GdBotao/GdBotao';
export * from './Components/Card/Card';
export * from './Components/GdTag/GdTag';
export * from './Components/GdGrupoOpcoes/GdGrupoOpcoes';
export * from './Components/GdCampoTexto/GdCampoTexto';
export * from './Components/InputQuantidade/InputQuantidade';
