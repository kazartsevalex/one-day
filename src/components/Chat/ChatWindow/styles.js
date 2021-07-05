import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 65px calc(100vh - 104px - 65px - 180px) 180px;
`;

export const ChatTitle = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 400;
`;
