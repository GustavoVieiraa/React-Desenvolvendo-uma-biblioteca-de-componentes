import React, { useState } from 'react';
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
  valorPadrao?: GdGrupoOpcao | null;
  onChange?: (opcao: GdGrupoOpcao) => void;
}

export const GdGrupoOpcoes = ({
  opcoes,
  valorPadrao,
  onChange,
}: GdGrupoOpcaoProps) => {
  const [selecao, setSelecao] = useState<GdGrupoOpcao | null>(
    valorPadrao ?? null
  );

  const aoSelecionar = (opcao: GdGrupoOpcao): void => {
    setSelecao(opcao);
    if (onChange) {
      onChange(opcao);
    }
  };

  return (
    <>
      {opcoes.map(opcao => (
        <SectionStyled
          onClick={() => aoSelecionar(opcao)}
          key={opcao.id}
          selecionado={selecao?.id == opcao.id}
        >
          <HeaderStyled selecionado={selecao?.id == opcao.id}>
            {opcao.titulo}
          </HeaderStyled>
          <div>
            <StrongStyled selecionado={selecao?.id == opcao.id}>
              {opcao.corpo}
            </StrongStyled>
          </div>
          <FooterStyled selecionado={selecao?.id == opcao.id}>
            {opcao.rodape}
          </FooterStyled>
        </SectionStyled>
      ))}
    </>
  );
};
