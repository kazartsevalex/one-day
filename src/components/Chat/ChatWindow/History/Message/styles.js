import styled from 'styled-components';

export const Msg = styled.div`
  display: flex;
  width: 100%;
  flex-direction: ${({ isCurrent }) => isCurrent ? 'row-reverse' : 'row'};
  flex-wrap: wrap;
  padding: 15px;
  background-color: ${({ isCurrent }) => isCurrent ? 'lightblue' : 'transparent'};
`;

export const Username = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: gray;
  font-size: 0.8em;
  padding: 5px;
`;

export const Text = styled.div`
  max-width: 50%;
  padding: 15px;
  background-color: white;
  min-height: 50px;
  border-radius: 5px;
`;

export const Status = styled.div`
  color: ${({ isLoading, isError }) => isLoading ? 'lightgray' : isError ? 'red' : 'green'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.8em;
  padding: 5px;
`;

export const MsgDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: gray;
  font-size: 0.8em;
  padding: 5px;
`;
