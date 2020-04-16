<template>
  <div class="test">
    <p>{{ msg }}</p>
    <router-link to="/hello">Hello</router-link>
    <p></p>
    <router-link to="/GenericAbc">generic abc</router-link>
    <p></p>
    <router-link to="/player_name_controler">PNC</router-link>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: 'This page is portal for test.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-weight: normal;
}
</style>
