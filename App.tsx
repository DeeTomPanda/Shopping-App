import React from 'react';

import {Main} from './components/Main';
import {TailwindProvider} from 'tailwind-rn';
import {PaperProvider} from 'react-native-paper';
import utilities from './tailwind.json';

function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <PaperProvider>
        <Main />
      </PaperProvider>
    </TailwindProvider>
  );
}

export default App;
