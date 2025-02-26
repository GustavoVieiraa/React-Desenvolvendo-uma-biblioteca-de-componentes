import React from 'react';
import { TagStyled } from './styles';

export interface GdTagProps {
  texto?: string;
}

export const GdTag = ({ texto }: GdTagProps) => {
  return <TagStyled>{texto}</TagStyled>;
};
