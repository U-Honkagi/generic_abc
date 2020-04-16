
import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
    round2Players: [
    // name, o, x, state
    ],
    undoStacks: [],
    redoStacks: [],
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
})