import styled from 'styled-components';

export const SectionStyled = styled.section<{ selecionado: boolean }>`
  width: 194px;
  height: 88px;
  margin: 10px;

  background-color: ${props => (props.selecionado ? '#049dd9' : '#FEFEFE')};

  border: 1px solid;
  border-radius: 8px;
  border-color: #049dd9;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  font-family: sans-serif;

  text-align: center;

  cursor: pointer;
`;

export const HeaderStyled = styled.header<{ selecionado: boolean }>`
  color: ${props => (props.selecionado ? '#FEFEFE' : '#049dd9;')};

  font-size: 12px;
  font-weight: 400;
`;

export const StrongStyled = styled.strong<{ selecionado: boolean }>`
  color: ${props => (props.selecionado ? '#FEFEFE' : '#049dd9;')};
  font-weight: 700;
  font-size: 16px;
`;

export const FooterStyled = styled.footer<{ selecionado: boolean }>`
  color: ${props => (props.selecionado ? '#FEFEFE' : 'grey;')};
  font-weight: 400;
  font-size: 12px;
`;
