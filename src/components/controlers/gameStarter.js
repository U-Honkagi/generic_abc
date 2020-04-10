var GameStarterComponent = {
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
}