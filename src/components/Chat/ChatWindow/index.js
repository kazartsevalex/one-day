import React from 'react';

import { useAppContext } from '../../../contexts/AppContext';

import History from './History';
import UserInput from './UserInput';
import { Wrapper, ChatTitle } from './styles';

const ChatWindow = () => {
  const { channel } = useAppContext();

  return (
    <Wrapper>
      <ChatTitle>{channel && channel.title}</ChatTitle>
      <History />
      <UserInput />
    </Wrapper>
  )
};

export default React.memo(ChatWindow);
