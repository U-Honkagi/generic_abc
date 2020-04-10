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
            store.commit('correct', this.index);
        },
        wrong() {
            store.commit('wrong', this.index);
        },
        editText(editedName) {
            store.commit('editText', { index: this.index, name: editedName });
        },
    },

    // created() {
    //     const todo = this.$store.getters.getTodoById(Number(this.$route.params.id));
    //     if (todo === undefined) {

    //       return;
    //     }
    //     this.title = todo.title;
    //     this.detail = todo.detail;
    // },
}