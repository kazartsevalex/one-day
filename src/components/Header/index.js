import React from 'react';

import { Wrapper } from './styles';

const Header = () => (
  <Wrapper>
    <h5>1 day chat App</h5>
    <p>All messages will be deleted at every 00:00 UTC</p>
  </Wrapper>
);

export default React.memo(Header);
