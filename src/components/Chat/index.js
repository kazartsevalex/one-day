import React from 'react';

import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';
import { Wrapper } from './styles';

const Chat = () => (
  <Wrapper>
    <Sidebar />
    <ChatWindow />
  </Wrapper>
);

export default React.memo(Chat);
