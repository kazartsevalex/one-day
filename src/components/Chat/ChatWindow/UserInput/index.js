import React, { useMemo, useEffect, useCallback, useRef } from 'react';

import { useAppContext } from '../../../../contexts/AppContext';
import Button from '../../../ui/Button';
import TextArea from '../../../ui/TextArea';

import { Wrapper } from './styles';

const UserInput = () => {
  const isTouched = useRef(false);

  const { channel, user, message, setMessage, setMessages, sendMessage } = useAppContext();

  const onInput = useCallback(
    (e) => {
      const val = e.target.value;
      setMessage(val);
    },
    [setMessage],
  );

  const isButtonDisabled = useMemo(
    () => !channel?.id || user === '' || message.trim() === '',
    [channel, user, message],
  );

  const onClick = useCallback(
    () => {
      const msg = {
        channelId: channel.id,
        text: message,
        userId: user,
      };
      sendMessage({
        variables: { ...msg }
      });

      setMessages(prev => [{
          ...msg,
          datetime: new Date(),
          messageId: new Date(),
          status: 'loading',
        },
        ...prev
      ]);
    },
    [channel, user, message, sendMessage, setMessages]
  );

  useEffect(
    () => {
      if (isTouched.current) {
        localStorage.setItem('message', message);
      } else {
        isTouched.current = true;
      }
    },
    [message],
  );

  return (
    <Wrapper>
      <TextArea placeholder="Type your message here..." value={message} onInput={onInput} />
      <Button title="Send Message" onClick={onClick} disabled={isButtonDisabled} />
    </Wrapper>
  )
};

export default UserInput;
