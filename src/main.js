// import { PlayerNameControlerComponent } from './src/components/controlers/playerNameControler.js'

const store = new Vuex.Store({
    state: {
        players: [
            //       プレイヤー名            o         x           状態
            { id: 0, name: 'プレイヤー01', correct: 0, wrong: 0, status: 'active' },
            { id: 1, name: 'プレイヤー02', correct: 0, wrong: 0, status: 'active' },
            { id: 2, name: 'プレイヤー03', correct: 0, wrong: 0, status: 'active' },
            { id: 3, name: 'プレイヤー04', correct: 0, wrong: 0, status: 'active' },
            { id: 4, name: 'プレイヤー05', correct: 0, wrong: 0, status: 'active' },
            { id: 5, name: 'プレイヤー06', correct: 0, wrong: 0, status: 'active' },
            { id: 6, name: 'プレイヤー07', correct: 0, wrong: 0, status: 'active' },
            { id: 7, name: 'プレイヤー08', correct: 0, wrong: 0, status: 'active' },
            { id: 8, name: 'プレイヤー09', correct: 0, wrong: 0, status: 'active' },
            { id: 9, name: 'プレイヤー10', correct: 0, wrong: 0, status: 'active' },
            { id:10, name: 'プレイヤー11', correct: 0, wrong: 0, status: 'active' },
            { id:11, name: 'プレイヤー12', correct: 0, wrong: 0, status: 'active' },
        ],
    },
    getters: {
        getPlayerDataById: state => id => {
            return state.players.find(players => players.id === id);
        }
    },
    mutations: {
        correct(state, { index }) {
            state.players[index].correct++;
        },
        wrong(state, { index }) {
            state.players[index].wrong++;
        },
        editText(state, { index, name }) {
            state.players[index].name = name;
        },
    },
})

const app = new Vue({
    store,
    template: `
    <div>
        <player-name-controler-component v-for="(name, index) in getPlayerNames" v-bind:index="index" v-bind:player-name="name"></player-name-controler-component>
    </div>
    `,
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
}).$mount('#app')