import React from 'react';
import { Text, View } from 'react-native';
import AppContainer from './src/components/app-container';
import Navigator from './src/';

export default function App() {
  return (
    <AppContainer>
      <Navigator />
    </AppContainer>
  );
}
