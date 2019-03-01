import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activePlayer: 'X',
    nonActivePlayer: 'O',
    gameStatus: 'turn',
    moves: 0,
    matches: 0,
    cells: new Array(9),
    wins: {
      x: 0,
      o: 0,
    },
    winConditions: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
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

    statusMessages: {
      turn: 'player move',
      draw: 'Draw!',
      win: 'player win!',
    },
  },
  mutations: {
    makeMove: state => {
      return state.moves++;
    },
    changePlayer: state => {
      if (state.activePlayer === 'X') {
        return state.activePlayer = '0';
      }
      return state.activePlayer = 'X';
    },
    changeGameStatus: (state, checkForWin) => {
      if (checkForWin) {
        state.gameStatus = state.gameStatuses.win;
        (state.activePlayer === state.players.x) ? state.wins.x++ : state.wins.o++;
        state.matches++;
        return false;
      } else if (state.moves == 9) {
        state.gameStatus = state.gameStatuses.draw;
        state.matches++;
        return false;
      } else {
        state.gameStatus = state.gameStatuses.turn;
        return true;
      }
    },
    restart: state => {
      state.activePlayer = state.players.x;
      state.gameStatus = state.gameStatuses.turn;
      state.moves = 0;
      state.cells = new Array(9);
    },
  },
});
