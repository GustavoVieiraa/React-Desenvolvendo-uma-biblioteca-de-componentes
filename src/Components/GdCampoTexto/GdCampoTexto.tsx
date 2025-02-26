import React, { useState } from 'react';
import { ContainerInput, StyledInput, StyledLabel } from './styles';

export interface GdCampoTextoProps {
  label: string;
  value: string;
  type?: 'text' | 'email' | 'password' | 'date';
  placeholder?: string;
  onChange: (value: string) => void;
}

export const GdCampoTexto = ({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
}: GdCampoTextoProps) => {
  const [input, setInput] = useState<GdCampoTextoProps | null>();

  return (
    <>
      <ContainerInput>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={event => onChange(event.target.value)}
        />
      </ContainerInput>
    </>
  );
};
