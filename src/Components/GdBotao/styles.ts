import styled, { css } from 'styled-components';
import { GdBotaoProps } from '.';

export const BotaoEstilizado = styled.button<GdBotaoProps>`
  background-color: ${(props: GdBotaoProps) =>
    props.tipo === 'primario' ? '#049dd9' : '#FFF'};

  border: 2px solid #049dd9;

  color: #fefefe;
  color: ${(props: GdBotaoProps) =>
    props.tipo === 'primario' ? '#FEFEFE' : '#049dd9'};

  font-size: 1rem;

  border-radius: 5px;

  padding: 16px 32px;

  cursor: pointer;

  transition: all 0.3s;

  ${(props: GdBotaoProps) =>
    props.tipo === 'primario'
      ? css`
          &:hover {
            background-color: rgb(3, 142, 197);
          }
        `
      : css`
          &:hover {
            background-color: #fefefe;
            color: rgb(3, 142, 197);
          }
        `};
`;
