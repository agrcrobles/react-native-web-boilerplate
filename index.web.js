// @flow

import React from 'react';

import { AppRegistry } from 'react-native';

import Navigation from './src/navigation';

import { AppContainer } from 'react-hot-loader';

const renderApp = () => <AppContainer>
  <Navigation />
</AppContainer>;

AppRegistry.registerComponent('ReactNativeWebBoilerplate', () => renderApp);

if (module.hot) {
  // $FlowFixMe
  module.hot.accept();

  const renderHotApp = () => <AppContainer>
    <Navigation />
  </AppContainer>;

  AppRegistry.registerComponent('ReactNativeWebBoilerplate', () => renderHotApp);
}

AppRegistry.runApplication('ReactNativeWebBoilerplate', {
  rootTag: document.getElementById('root')
});
