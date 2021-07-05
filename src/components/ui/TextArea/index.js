import React from 'react';

import { TextAreaStyled } from './styles';

const TextArea = ({ placeholder, onInput, value }) => (
  <TextAreaStyled
    placeholder={placeholder}
    onInput={onInput}
    value={value}
  />
);

export default TextArea;
