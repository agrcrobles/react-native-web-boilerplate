// @flow

import React from 'react';

import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';

import { createStore } from 'redux';

import reducers from './reducers';

import Navigation from './navigation';

const store = createStore(reducers);

const renderApp = () => <Provider store={store}>
  <Navigation />
</Provider>;

AppRegistry.registerComponent('ReactNavigationExamples', () => renderApp);

if (module.hot) {
  // $FlowFixMe
  module.hot.accept();
  const nextReducer = require('./reducers').default; // eslint-disable-line
  store.replaceReducer(nextReducer);

  const renderHotApp = () => <Provider store={store}>
    <Navigation />
  </Provider>;

  AppRegistry.registerComponent('ReactNavigationExamples', () => renderHotApp);
}

AppRegistry.runApplication('ReactNavigationExamples', {
  rootTag: document.getElementById('root')
});
