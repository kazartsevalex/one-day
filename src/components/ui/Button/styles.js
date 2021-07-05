import styled from 'styled-components';

export const ButtonStyled = styled.button`
  border-radius: 5px;
  border: none;
  background: ${({ disabled }) => disabled ? 'lightgray' : '#17a2b8'};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  color: white;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  padding: 0 15px;
  box-sizing: border-box;
  width: fit-content;
`;
