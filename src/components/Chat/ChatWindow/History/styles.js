import styled from 'styled-components';

export const Scroller = styled.div`
  display: flex;
  flex-flow: column-reverse wrap;
  position: absolute;
`;

export const Wrapper = styled.div`
  height: calc(100vh - 104px - 65px - 180px);
  position: relative;
  overflow: scroll;
`;
