import React, { useContext, useState, createContext, useEffect } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';

import { POST_MESSAGE } from './mutations';
import { FETCH_LATEST_MESSAGES, FETCH_MORE_MESSAGES } from './queries';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [channel, setChannel] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(
    () => {
      const localStorageMsg = localStorage.getItem('message');
      if (localStorageMsg) {
        setMessage(localStorageMsg);
      }
    },
    []
  );

  const [getLatestMessages, { data: latestMessages }] = useLazyQuery(FETCH_LATEST_MESSAGES, {
    fetchPolicy: 'network-only',
  });

  const [getMoreMessages, { data: moreMessages }] = useLazyQuery(FETCH_MORE_MESSAGES, {
    fetchPolicy: 'network-only',
  });

  useEffect(
    () => {
      if (latestMessages?.fetchLatestMessages) {
        setMessages(latestMessages.fetchLatestMessages);
      }
    },
    [latestMessages],
  );

  useEffect(
    () => {
      if (moreMessages?.fetchMoreMessages) {
        setMessages(prev => {
          const newArr = Array.from(new Set([...prev, ...moreMessages.fetchMoreMessages])).sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
          return newArr;
        });
      }
    },
    [moreMessages],
  );

  const [sendMessage] = useMutation(POST_MESSAGE, {
    onError: () => {
      setMessages(msgs => msgs.map(msg => {
        if (msg.status === 'loading' && msg.userId === user && msg.channelId === channel.id) {
          return { ...msg, status: 'error' };
        }
        return msg;
      }));
    },
    onCompleted: () => {
      setMessage('');
      getLatestMessages({ variables: { channelId: channel.id }});
    }
  });

  const appTheme = {
    users: ['', 'Joyse', 'Sam', 'Russell'],
    channels: [
      { id: '1', title: 'General Channel' },
      { id: '2', title: 'Technology Channel' },
      { id: '3', title: 'LGTM Channel' },
    ],
    user, setUser,
    channel, setChannel,
    message, setMessage,
    messages, setMessages,
    getLatestMessages,
    sendMessage,
    getMoreMessages
  };

  return (
    <AppContext.Provider value={appTheme}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
