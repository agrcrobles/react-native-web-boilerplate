import { AppRegistry } from 'react-native'

import TicTacToeApp from './TicTacToe'

AppRegistry.registerComponent('TicTacToeApp', () => TicTacToeApp)

if (module.hot) {
  module.hot.accept();
}
AppRegistry.runApplication('TicTacToeApp', {
  rootTag: document.getElementById('react-root')
})
