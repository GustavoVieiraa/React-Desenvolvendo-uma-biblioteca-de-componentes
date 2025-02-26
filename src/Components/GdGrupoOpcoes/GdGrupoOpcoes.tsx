import React from 'react';
import {
  FooterStyled,
  HeaderStyled,
  SectionStyled,
  StrongStyled,
} from './styles';

export interface GdGrupoOpcao {
  id: number;
  titulo: string;
  corpo: string;
  rodape: string;
}

export interface GdGrupoOpcaoProps {
  opcoes: GdGrupoOpcao[];
}

export const GdGrupoOpcoes = ({ opcoes }: GdGrupoOpcaoProps) => {
  return (
    <>
      {opcoes.map(opcao => (
        <SectionStyled key={opcao.id} selecionado={false}>
          <HeaderStyled selecionado={false}>{opcao.titulo}</HeaderStyled>
          <div>
            <StrongStyled selecionado={false}>{opcao.corpo}</StrongStyled>
          </div>
          <FooterStyled selecionado={false}>{opcao.rodape}</FooterStyled>
        </SectionStyled>
      ))}
    </>
  );
};
