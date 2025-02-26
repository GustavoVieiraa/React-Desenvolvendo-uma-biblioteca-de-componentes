import styled from 'styled-components';

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 420px;
`;

export const StyledLabel = styled.label`
  padding: 6px;

  color: #fefefe;

  font-weight: 700;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

export const StyledInput = styled.input`
  border-radius: 16px;
  border: 1px solid #fefefe;

  padding: 12px 16px;

  font-size: 16px;
`;
