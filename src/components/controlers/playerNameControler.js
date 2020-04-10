var PlayerNameControlerComponent = {
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
        <button @click="correct"> ○ </button>
        <button @click="wrong"  > × </button>
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
    methods: {
        correct() {
            store.commit('correct', { index: this.index });
        },
        wrong() {
            store.commit('wrong', { index: this.index });
        },
        editText(editedName) {
            store.commit('editText', { index: this.index, name: editedName });
        },
    },

    created() {
        // const player = store.getters.getPlayerDataById(Number(route.params.id));
        // if (player === undefined) {
        //     console.log('player undefined!');
        //     return;
        // }
        // console.log(player.name);
        // console.log(player.correct);
        // console.log(player.wrong);
        // console.log(player.status);
    },
}