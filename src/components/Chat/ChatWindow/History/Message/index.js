import React from 'react';

import { Msg, Username, Text, Status, MsgDate } from './styles';

const Message = ({ isCurrent, isLoading, isError, text, date, userId }) => {
  const parsed = new Date(date);
  const formattedDate = `${parsed.getHours().toString().padStart(2, '0')}:${parsed.getMinutes().toString().padStart(2, '0')}`;

  return (
    <Msg isCurrent={isCurrent}>
      <Username>{userId}</Username>
      <Text>{text}</Text>
      {isCurrent && (
        <Status isLoading={isLoading} isError={isError}>
          {isLoading ? 'Loading' : isError ? 'Error' : 'Sent'}
        </Status>
      )}
      <MsgDate>{formattedDate}</MsgDate>
    </Msg>
  )
};

export default React.memo(Message);
