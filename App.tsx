/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import Router from './src/routes';
import {light} from './src/themes';

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
