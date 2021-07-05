import styled from 'styled-components';

export const Channel = styled.div`
  padding: 15px;
  margin: 0 -15px;
  cursor: pointer;
  background: ${({ isActive }) => isActive ? 'white' : 'transparent'};
  &:hover {
    ${({ isActive }) => isActive ? `
      background: white;
    ` : `
      background-color: #ffffff;
      background-image: -webkit-gradient(linear, left top, left bottom, from(#e9eff5), to(#ffffff));
      background-image: -webkit-linear-gradient(right, #e9eff5, #ffffff);
      background-image: -moz-linear-gradient(right, #e9eff5, #ffffff);
      background-image: -ms-linear-gradient(right, #e9eff5, #ffffff);
      background-image: -o-linear-gradient(right, #e9eff5, #ffffff);
      background-image: linear-gradient(right, #e9eff5, #ffffff);
    `};
  }
`;

export const ChannelTitle = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0 0 15px;
  margin: 0;
`;
