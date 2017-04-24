// @flow

import React from 'react';

import { AppRegistry } from 'react-native';

import Navigation from './src/navigation';

import { AppContainer } from 'react-hot-loader';

const renderApp = () => <AppContainer>
  <Navigation />
</AppContainer>;

AppRegistry.registerComponent('ReactNavigationExamples', () => renderApp);

if (module.hot) {
  // $FlowFixMe
  module.hot.accept();

  const renderHotApp = () => <AppContainer>
    <Navigation />
  </AppContainer>;

  AppRegistry.registerComponent('ReactNavigationExamples', () => renderHotApp);
}

AppRegistry.runApplication('ReactNavigationExamples', {
  rootTag: document.getElementById('root')
});
