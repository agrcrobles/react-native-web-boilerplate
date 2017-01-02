import { AppRegistry } from 'react-native';
const React = require('react');

import { Provider, connect } from 'react-redux';

import { createStore } from 'redux';

const TicTacToe = require('./TicTacToe');

const reducers = function noop(state, action) {
  return state;
};

const store = createStore(reducers);

const renderApp = () => {
  const App = connect()(TicTacToe);
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent('TicTacToeApp', () => renderApp);

if (module.hot) {
  module.hot.accept();
  const nextReducer = reducers;
  store.replaceReducer(nextReducer);
}

AppRegistry.runApplication('TicTacToeApp', {
  rootTag: document.getElementById('react-root')
});
