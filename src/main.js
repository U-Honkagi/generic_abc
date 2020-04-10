// import { PlayerNameControlerComponent } from './src/components/controlers/playerNameControler.js'

const store = new Vuex.Store({
    state: {
        players: [
            //       プレイヤー名            o         x           状態
            { name: 'プレイヤー01', correct: 0, wrong: 0, state: 'active' },
            { name: 'プレイヤー02', correct: 0, wrong: 0, state: 'active' },
            { name: 'プレイヤー03', correct: 0, wrong: 0, state: 'active' },
            { name: 'プレイヤー04', correct: 0, wrong: 0, state: 'active' },
            { name: 'プレイヤー05', correct: 0, wrong: 0, state: 'active' },
            { name: 'プレイヤー06', correct: 0, wrong: 0, state: 'active' },
            { name: 'プレイヤー07', correct: 0, wrong: 0, state: 'active' },
            { name: 'プレイヤー08', correct: 0, wrong: 0, state: 'active' },
            { name: 'プレイヤー09', correct: 0, wrong: 0, state: 'active' },
            { name: 'プレイヤー10', correct: 0, wrong: 0, state: 'active' },
            { name: 'プレイヤー11', correct: 0, wrong: 0, state: 'active' },
            { name: 'プレイヤー12', correct: 0, wrong: 0, state: 'active' },
        ],
    },
    // getters: {
    //     currentCorrect:
    // },
    mutations: {
        correct(state, index) {
            state.players[index].correct++;
            console.log(state.players[index].name);
            console.log(state.players[index].correct);
        },
        wrong(state, index) {
            state.players[index].wrong++;
            console.log(state.players[index].name);
            console.log(state.players[index].wrong);
        },
        editText(state, { index, name }) {
            state.players[index].name = name;
        },
    },
})

new Vue({
    el: '#app',
    components: {
        // 'my-component': MyComponent,
        'player-name-controler-component': PlayerNameControlerComponent,
    },
    computed: {
        getPlayerNames: function() {
            let names = [];
            for (const player of store.state.players) {
                names.push(player.name);
            }
            return names;
        },
    },
    // methods: {

    // },
})