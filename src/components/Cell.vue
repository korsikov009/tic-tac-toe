<template>
  <div class="cell" @click="moveMark">{{cell}}</div>
</template>


<script>

  export default {
    name: 'cell',
    props: [
      'cell',
      'numberOfCell'
    ],
    computed: {
      activePlayer() {
        return this.$store.state.activePlayer;
      }
    },
    methods: {
      moveMark() {
        if (!this.$store.state.cells[this.numberOfCell] && this.$store.state.gameStatus === this.$store.state.gameStatuses.turn) {
          this.$set(this.$store.state.cells, this.numberOfCell, this.$store.state.activePlayer);
          this.$store.commit('makeMove');
          this.$emit('onmakemove', this.numberOfCell);
        }
      }
    }
  }

</script>


<style lang="scss">
  .cell {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33.333%;
    height: 110px;
    border: 3px solid #2c3e50;
    font-size: 3.5em;
    font-family: 'Gochi Hand', sans-serif;
    cursor: pointer;
  }

  .cell:hover {
    background-color: #7f8c8d;
  }

</style>