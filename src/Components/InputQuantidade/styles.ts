import styled from 'styled-components';

export const CardQuantidade = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 220px;
  height: 100px;

  background: #fefefe;

  border-radius: 6px;
`;

export const CardTitulo = styled.strong`
  font-weight: 800;
  color: #049dd9;
`;

export const CorpoCard = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
`;

export const AdicionarQuantidadeButton = styled.button`
  width: 30px;
  height: 30px;

  border-radius: 50%;
  border: none;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  background-color: #049dd9;

  & > svg {
    align-items: center;
    color: #fefefe;
  }

  cursor: pointer;
`;

export const RemoverQuantidadeButton = styled.button`
  width: 30px;
  height: 30px;

  border-radius: 50%;
  border: none;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  background-color: #049dd9;

  & > svg {
    align-items: center;
    color: #fefefe;
  }

  cursor: pointer;
`;

export const Contador = styled.p`
  font-size: 16px;
  font-weight: 600;

  color: grey;
`;
