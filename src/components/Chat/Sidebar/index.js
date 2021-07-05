import React from 'react';

import Users from './Users';
import Channels from './Channels';
import { Wrapper, SettingGroup, SettingTitle } from './styles';

const Sidebar = () => {
  return (
    <Wrapper>
      <SettingGroup>
        <SettingTitle>Choose your user</SettingTitle>
        <Users />
      </SettingGroup>
      <SettingGroup>
        <SettingTitle>Choose your Channel</SettingTitle>
        <Channels />
      </SettingGroup>
    </Wrapper>
  )
};

export default React.memo(Sidebar);
