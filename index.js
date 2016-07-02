import { AppRegistry } from 'react-native'

import TicTacToeApp from './TicTacToe'

AppRegistry.registerComponent('TicTacToeApp', () => TicTacToeApp)

AppRegistry.runApplication('TicTacToeApp', {
  rootTag: document.getElementById('react-root')
})
