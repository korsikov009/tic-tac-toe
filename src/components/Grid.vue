<template>
  <div class="grid-container">
    <div class="grid">
      <cell ref="cell" v-for="(cell, index) in cells" v-bind:value="activePlayer" v-on:onmove="movePlayer"></cell>
    </div>
  </div>
</template>

<script>

  import Cell from'./Cell.vue'

  export default {
    components: {Cell},
    props: [
      'restart'
    ],
    data () {
      return {
        activePlayer: players.x,
        gameStatus: gameStatus.turn,
        moves: 0,
        cells: {
          1: '', 2: '', 3: '',
          4: '', 5: '', 6: '',
          7: '', 8: '', 9: ''
        },
        winConditions: [
          [1, 2, 3], [4, 5, 6], [7, 8, 9],
          [1, 4, 7], [2, 5, 8], [3, 6, 9],
          [1, 5, 9], [3, 5, 7]
        ]
      }
    },
    computed: {},
    methods: {
      changePlayer() {
        store.commit('changePlayer');
      },
      movePlayer(index) {
        store.commit('makeMove');
      },
      checkForWin() {

      },
      changeGameStatus() {

      }
    }
  }

</script>

<style lang="scss">
  .grid {
    display: flex;
    flex-wrap: wrap;

    background-color: #34495e;
    color: #fff;
    width: 100%;
  }
</style>