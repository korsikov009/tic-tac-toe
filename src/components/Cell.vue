<template>
  <div class="cell" v-on:click="moveMark">{{mark}}</div>
</template>


<script>

  export default {
    name: 'cell',
    data () {
      return {
        mark: ''
      }
    },
    methods: {
      moveMark() {
      }
    }
  }

</script>


<style lang="scss">
  .cell {
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