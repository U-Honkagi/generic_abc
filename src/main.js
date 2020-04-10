// import { PlayerNameControlerComponent } from './src/components/controlers/playerNameControler.js'

const app = new Vue({
    store,
    template: `
    <div>
        <player-name-controler-component v-for="(name, index) in getPlayerNames" v-bind:index="index" v-bind:player-name="name"></player-name-controler-component>
        <game-starter-component></game-starter-component>
        <command-button-component></command-button-component>
    </div>
    `,
    components: {
        // 'my-component': MyComponent,
        'player-name-controler-component': PlayerNameControlerComponent,
        'game-starter-component': GameStarterComponent,
        'command-button-component': CommandButtonComponent,
    },
    computed: {
        getPlayerNames() {
            return this.$store.getters.getPlayerNames;
        }
    },
    // methods: {

    // },
}).$mount('#app')