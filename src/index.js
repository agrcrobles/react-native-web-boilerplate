import { AppRegistry } from 'react-native';

import { Provider, connect } from 'react-redux';

import { createStore } from 'redux';

const React = require('react');
const TicTacToe = require('./TicTacToe');

const reducers = function noop(state) {
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
