import React from 'react';

import Container from './components/Container';
import Header from './components/Header';
import Chat from './components/Chat';
import { AppContextProvider } from './contexts/AppContext';

const App = () => (
  <AppContextProvider>
    <Container>
      <Header />
      <Chat />
    </Container>
  </AppContextProvider>
);

export default App;
