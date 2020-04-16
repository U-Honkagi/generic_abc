<template>
  <div class="test">
      <player-name-controler-component></player-name-controler-component>
      <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import PlayerNameControler from './PlayerNameControler.vue'

export default {
  name: 'generic_abc'
}

Vue.component('player-name-controler-component', PlayerNameControler)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-weight: normal;
}
</style>
