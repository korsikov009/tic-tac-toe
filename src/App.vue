<template>
  <div id="app">
    <div id="details">
      <h1>Tic Tac Toe</h1>
      <h2>Match number...{{ matches}}</h2>
    </div>
    <div class="game-field">
      <div class="game-status" v-bind:class="classGameStatus">
        {{gameStatusMessage}}
      </div>
      <grid v-on:onmoveplayer="checkMove" v-bind:restart="restart" v-on:onactiveplayer="getActivePlayer"></grid>
      <button class="restart" v-on:click="restart">Restart (in dev)</button>
    </div>
  </div>
</template>

<script>

  import Grid from './components/Grid.vue'

  let statusMessage = {
    turn: 'player move',
    draw: 'Draw!',
    win: 'player win!'
  };


  export default {
    components: {Grid},
    name: 'app',
    data () {
      return {
        wins: {
          x: 0,
          o: 0
        },
        gameStatus: 'turn',
        activePlayer: 'X',
        restart: false
      }
    },
    computed: {
      matches() {
        return this.wins.x + this.wins.o;
      },
      nonActivePlayer() {
        if (this.activePlayer === 'X') {
          return 'O';
        }
        return 'X';
      },
      gameStatusMessage: {
        get() {
          if (this.gameStatus === 'win') {
            return this.gameStatusMessage = this.activePlayer + " " + statusMessage.win;

          } else if (this.gameStatus === 'draw') {
            return this.gameStatusMessage = statusMessage.draw;

          }
          return this.gameStatusMessage = this.activePlayer + " " + statusMessage.turn;
        },
        set() {
          // добавил, потому что была ошибка, насчет того что у данного свойства нет сеттера
        }

      },
      classGameStatus() {
        if (this.gameStatus === 'win') {
          return {
            'game-status_turn': false,
            'game-status_win': true,
            'game-status_draw': false,
          }
        }
        else if (this.gameStatus === 'draw') {
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
      checkMove (gameStatus) {
        this.gameStatus = gameStatus;
      },
      getActivePlayer(activePlayer) {
        this.activePlayer = activePlayer;
      },
      restartGame() {
        this.restart = true;
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
    max-width: 300px;
    color: #34495e;
  }

  h1 {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 3em;
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
