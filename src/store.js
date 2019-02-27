import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activePlayer: 'X',
    nonActivePlayer: 'O',
    gameStatus: '',
    moves: 0,
    cells: ['', '', '', '', '', '', '', '', ''],
    winConditions: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ],
    players: {
      x: 'X',
      o: 'O',
    },

    gameStatuses: {
      turn: 'turn',
      win: 'win',
      draw: 'draw',
    },
  },
  mutations: {
    makeMove: state => state.moves++,
    changePlayer: state => {
      if (state.activePlayer === 'X') {
        return state.activePlayer = '0';
      }
      return state.activePlayer = 'X';
    },
  },
});
