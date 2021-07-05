import React, { useCallback, useMemo } from 'react';

import { useAppContext } from '../../../../contexts/AppContext';
import Button from '../../../ui/Button';
import Message from './Message';
import { Wrapper, Scroller } from './styles';

const History = () => {
  const { messages, user, getMoreMessages, channel } = useAppContext();

  const oldestMessage = useMemo(
    () => {
      if (messages?.length) {
        return messages[0].messageId;
      }
    },
    [messages]
  );

  const latestMessage = useMemo(
    () => {
      if (messages?.length) {
        return messages[messages.length - 1].messageId;
      }
    },
    [messages]
  );

  const onClick = useCallback(
    (old) => {
      getMoreMessages({
        variables: {
          old,
          channelId: channel.id,
          messageId: old ? latestMessage : oldestMessage
        }
      })
    },
    [channel, oldestMessage, latestMessage, getMoreMessages]
  );

  return (
    <Wrapper>
      <Scroller>
        {messages && messages.length >= 10 ? (
          <Button title="Read More new" onClick={() => onClick(false)} />
        ) : null}
        {messages && messages.map(msg => (
          <Message
            key={msg.messageId}
            isCurrent={msg.userId === user}
            text={msg.text}
            date={msg.datetime}
            userId={msg.userId}
            isError={msg?.status === 'error'}
            isLoading={msg?.status === 'loading'}
          />
        ))}
        {messages && messages.length >= 10 ? (
          <Button title="Read More old" onClick={() => onClick(true)} />
        ) : null}
      </Scroller>
    </Wrapper>
  )
}

export default React.memo(History);
