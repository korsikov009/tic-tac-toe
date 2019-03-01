<template>
  <div id="app">
    <div class="score">
      <div class="score-x">X has {{winnerX}} wins</div>
      <h2 class="score-title">Score Board</h2>
      <div class="score-o">O has {{winnerO}} wins</div>
    </div>
    <div class="container">
      <div id="details">
        <h1>Tic Tac Toe</h1>
        <h2>Match #{{matches}}</h2>
      </div>
      <div  class="game-field">
        <div class="game-status" :class="classGameStatus">{{gameMessage}}</div>
        <grid></grid>
        <button class="restart" @click="restart">Restart</button>
      </div>
    </div>
  </div>
</template>

<script>

  import Grid from './components/Grid.vue'

  export default {
    components: {Grid},
    name: 'app',
    computed: {
      matches() {
        return this.$store.state.matches;
      },
      gameMessage() {
        let message = '';
        const state = this.$store.state;
        if (state.gameStatus === state.gameStatuses.win) {
          message = state.activePlayer + ' ' +  state.statusMessages.win;
        } else if(state.gameStatus === state.gameStatuses.draw) {
          message = state.statusMessages.draw;
        } else {
          message = state.activePlayer + ' ' + state.statusMessages.turn;
        }
        return message;
      },
      winnerX() {
        return this.$store.state.wins.x;
      },
      winnerO() {
        return this.$store.state.wins.o;
      },
      classGameStatus() {
        const state = this.$store.state;
        if (state.gameStatus === state.gameStatuses.win) {
          return {
            'game-status_turn': false,
            'game-status_win': true,
            'game-status_draw': false,
          }
        }
        else if (state.gameStatus === state.gameStatuses.draw) {
          return {
            'game-status_turn': false,
            'game-status_win': false,
            'game-status_draw': true,
          }
        }
        else {
          return {
            'game-status_turn': true,
            'game-status_win': false,
            'game-status_draw': false,
          }
        }
      }
    },
    methods: {
      restart() {
        this.$store.commit('restart');
      }
    }
  }

</script>

<style lang="scss">
  @import url(https://fonts.googleapis.com/css?family=Dosis|Gochi+Hand);

  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    background-color: #fff;
    color: #fff;
    font-family: 'Dosis', Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin: 0px;
  }

  #app {
    margin: 0 auto;
    max-width: 600px;
    color: #34495e;
  }

  .container {
    margin: 0 auto;
    max-width: 300px;
  }

  h1 {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 3em;
  }

  .score {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: #16a085;
    color: #fff;
    box-shadow: 10px solid #fff;
    padding: 10px 20px;
    overflow-x: none;
  }

  .score-title {
    margin: 0;
  }

  .score-x, .score-o {
    font-weight: bold;
    font-size: 20px;
  }

  .game-status {
    margin: 0px;
    padding: 15px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: #f1c40f;
    color: #fff;
    font-size: 1.4em;
    font-weight: bold;
  }

  .game-status_turn {
    background-color: #f1c40f;
  }

  .game-status_win {
    background-color: #2ecc71;
  }

  .game-status_draw {
    background-color: #9b59b6;
  }

  .restart {
    background-color: #e74c3c;
    color: #fff;
    border: 0px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    font-family: 'Dosis', Helvetica, sans-serif;
    font-size: 1.4em;
    font-weight: bold;
    margin: 0px;
    padding: 15px;
    width: 100%;
  }

  .restart:hover {
    background-color: #c0392b;
    cursor: pointer;
  }

</style>
