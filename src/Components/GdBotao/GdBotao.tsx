import React from 'react';
import { BotaoEstilizado } from './styles';

export interface GdBotaoProps {
  texto?: string;
  tipo?: 'primario' | 'secundario';
  onClick?: () => void;
}

export const GdBotao = ({
  texto,
  tipo = 'primario',
  onClick,
}: GdBotaoProps) => {
  return (
    <BotaoEstilizado onClick={onClick} tipo={tipo}>
      {texto}
    </BotaoEstilizado>
  );
};
