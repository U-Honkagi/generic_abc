var App = {
    template:
    `
    <div>
        <header>
            <h1 @click="$router.push('/')">My Todo App</h1>
        </header>
        <main>
            <router-view/>
            <div>
                <player-name-controler-component v-for="(name, index) in getPlayerNames" v-bind:index="index" v-bind:player-name="name"></player-name-controler-component>
                <game-starter-component></game-starter-component>
                <command-button-component></command-button-component>
            </div>

        </main>
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


    methods: {
    },

    created() {
    },
}