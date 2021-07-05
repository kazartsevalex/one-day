import React from 'react';

import { ButtonStyled } from './styles';

const Button = ({ title, onClick, disabled }) => (
  <ButtonStyled onClick={onClick} disabled={disabled}>
    {title}
  </ButtonStyled>
);

export default Button;
