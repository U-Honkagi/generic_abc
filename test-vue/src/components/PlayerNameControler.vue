<template>
  <div>
    <div class="playerName" v-for="(index, key) in indexes" :key="key">
      <label>
          {{ index + 1 }}: <input class="inputName" v-model="playerName[index]">
      </label>
      <span>{{ correct[index] }}</span><button @click="setCorrect(index)" :disabled="!isActive"> ○ </button>
      <span>{{ wrong[index] }}</span><button @click="setWrong(index)" :disabled="!isActive"> × </button>
      <span>{{ status }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerNameControler',
  data () {
    return {
      indexes: [],
      correct: [],
      wrong: [],
      playerName: []
    }
  },
  computed: {
    // correct () {
    //   return -1
    //   // return this.$store.state.players[this.index].correct;
    // },
    // wrong () {
    //   return -1
    //   // return this.$store.state.players[this.index].wrong;
    // },
    status () {
      return 'test'
      // return this.$store.state.players[this.index].status;
    },
    isActive () {
      return true
      // return this.status === 'active';
    }
  },
  methods: {
    setCorrect (index) {
      this.correct[index] += 1
      console.log('name' + this.playerName[index])
    // this.$store.dispatch('correct', { index: this.index });
    },
    setWrong (index) {
      this.wrong[index] += 1
      console.log('name' + this.playerName[index])
      // this.$store.dispatch('wrong', { index: this.index });
    },
    editText (editedName) {
      // this.$store.commit('editText', { index: this.index, name: editedName });
    }
  },
  created () {
    for (let i = 0; i < 12; i++) {
      this.indexes.push(i)
      this.correct.push(0)
      this.wrong.push(0)
      this.playerName.push('Player' + String(i + 1))
    }
  }
}
</script>

<style>
.playerName {
    height: 50px;
}
.inputName {
    font-size: 3vmin;
}
</style>
