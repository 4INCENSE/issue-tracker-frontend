import React from 'react';
import GlobalStyleProvider from '@/components/style/GlobalStyle';

import Routing from '@/components/routing/Routing';

const App = () => {
  return (
    <GlobalStyleProvider>
      <Routing />
    </GlobalStyleProvider>
  );
};

export default App;
