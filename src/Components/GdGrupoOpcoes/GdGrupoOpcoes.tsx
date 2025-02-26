import React from 'react';
import {
  FooterStyled,
  HeaderStyled,
  SectionStyled,
  StrongStyled,
} from './styles';

export const GdGrupoOpcoes: React.FC = () => {
  return (
    <>
      <SectionStyled selecionado={false}>
        <HeaderStyled selecionado={false}>E-book</HeaderStyled>
        <div>
          <StrongStyled selecionado={false}>R$ 00,00</StrongStyled>
        </div>
        <FooterStyled selecionado={false}>.pdf, .epub, .mob</FooterStyled>
      </SectionStyled>
      <SectionStyled selecionado={true}>
        <HeaderStyled selecionado={true}>E-book</HeaderStyled>
        <div>
          <StrongStyled selecionado={true}>R$ 00,00</StrongStyled>
        </div>
        <FooterStyled selecionado={true}>.pdf, .epub, .mob</FooterStyled>
      </SectionStyled>
      <SectionStyled selecionado={false}>
        <HeaderStyled selecionado={false}>E-book</HeaderStyled>
        <div>
          <StrongStyled selecionado={false}>R$ 00,00</StrongStyled>
        </div>
        <FooterStyled selecionado={false}>.pdf, .epub, .mob</FooterStyled>
      </SectionStyled>
    </>
  );
};
