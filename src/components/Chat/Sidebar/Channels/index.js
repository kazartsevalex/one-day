import React, { useCallback } from 'react';

import { useAppContext } from '../../../../contexts/AppContext';

import { Channel, ChannelTitle } from './styles';

const Channels = () => {
  const { channels, channel, setChannel, getLatestMessages } = useAppContext();


  const onClick = useCallback(
    (ch) => {
      if (channel?.id === ch.id) return;

      setChannel(ch);
      getLatestMessages({ variables: { channelId: ch.id }});
    },
    [setChannel, channel, getLatestMessages],
  );

  return (
    <>
      {channels.map(ch => (
        <Channel key={`channel_${ch.id}`} onClick={() => onClick(ch)} isActive={channel?.id === ch.id}>
          <ChannelTitle>{ch.title}</ChannelTitle>
        </Channel>
      ))}
    </>
  )
};

export default React.memo(Channels);
