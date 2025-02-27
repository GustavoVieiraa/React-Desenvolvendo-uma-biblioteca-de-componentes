import React, { useEffect, useState } from 'react';

import {
  AdicionarQuantidadeButton,
  CardQuantidade,
  CardTitulo,
  Contador,
  CorpoCard,
  RemoverQuantidadeButton,
} from './styles';
import { FaCirclePlus, FaCircleMinus } from 'react-icons/fa6';

const IconFaCircleMinus = FaCircleMinus as React.ElementType;
const IconFaCirclePlus = FaCirclePlus as React.ElementType;

export interface InputQuantidadeProps {
  onChange?: (value: number) => void;
}

export const InputQuantidade = ({ onChange }: InputQuantidadeProps) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (onChange) {
      onChange(Number(value));
    }
  }, [value]);

  return (
    <CardQuantidade>
      <CardTitulo>Quantidade</CardTitulo>
      <CorpoCard>
        <RemoverQuantidadeButton onClick={() => setValue(prev => prev - 1)}>
          <IconFaCircleMinus />
        </RemoverQuantidadeButton>
        <Contador> {value} </Contador>
        <AdicionarQuantidadeButton onClick={() => setValue(prev => prev + 1)}>
          <IconFaCirclePlus />
        </AdicionarQuantidadeButton>
      </CorpoCard>
    </CardQuantidade>
  );
};
