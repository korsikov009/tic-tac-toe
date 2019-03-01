<template>
  <div class="grid-container">
    <div class="grid">
      <cell @onmakemove="changeGameStatus" v-for="(cell, index) in cells" :cell="cell" :numberOfCell="index"></cell>
    </div>
  </div>
</template>

<script>

  import Cell from'./Cell.vue'

  export default {
    components: {Cell},

    computed: {
      cells() {
        return this.$store.state.cells;
      },
    },
    methods: {
      checkForWin() {
        let cells = this.$store.state.cells, wc = this.$store.state.winConditions, ap = this.$store.state.activePlayer;
        for (let i = 0; i < wc.length; i++) {
          if (ap === cells[wc[i][0]] &&  ap === cells[wc[i][1]] && ap === cells[wc[i][2]]) {
            return true;
          }
        }
        return false;
      },
      changeGameStatus() {
        this.$store.commit('changeGameStatus', this.checkForWin());
        if (this.$store.state.gameStatus === this.$store.state.gameStatuses.turn) {
          this.$store.commit('changePlayer');
        }
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