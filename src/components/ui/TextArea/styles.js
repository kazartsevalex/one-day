import styled from 'styled-components';

export const TextAreaStyled = styled.textarea`
  border-radius: 5px;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  padding: 15px;
  border: 1px solid #ced4da;
  height: 114px;
  min-height: 114px;
  max-height: 114px;
  background: white;
  box-sizing: border-box;
  color: #495057;
  outline: none;
  &:focus {
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
    border-color: #80bdff;
    outline: none;
  }
`;
