const PlayerNameControlerComponent = {
    template:
    `
    <div style="
        height: 50px;
    ">
        <label>
            {{ index + 1 }}: <input style="
                font-size: 3vmin;
            "
            v-bind:value="playerName" @blur="editText($event.target.value)">
        </label>
        <span>{{ correct }}</span><button @click="setCorrect" v-bind:disabled="!isActive"> ○ </button>
        <span>{{ wrong }}</span><button @click="setWrong" v-bind:disabled="!isActive"> × </button>
        <span>{{ status }}</span>
    </div>
    `,
    props: {
        playerName: String,
        index: Number,
    },
    // data() {
    //     return {
    //         playerName: '',
    //         _correct: 0,
    //         _wrong: 0,
    //         _status: 'active',
    //     }
    // },
    computed: {
        correct() {
            return this.$store.state.players[this.index].correct;
        },
        wrong() {
            return this.$store.state.players[this.index].wrong;
        },
        status() {
            return this.$store.state.players[this.index].status;
        },
        isActive() {
            return this.status === 'active';
        },
    },

    methods: {
        setCorrect() {
            this.$store.dispatch('correct', { index: this.index });
        },
        setWrong() {
            this.$store.dispatch('wrong', { index: this.index });
        },
        editText(editedName) {
            this.$store.commit('editText', { index: this.index, name: editedName });
        },
    },

    created() {
        const player = this.$store.getters.getPlayerDataById(Number(this.index));
        if (player === undefined) {
            console.log('player undefined!');
            return;
        }
        // this.playerName = player.name;
        // this.correct    = player.correct;
        // this.wrong      = player.wrong;
        // this.status     = player.status;
    },
}