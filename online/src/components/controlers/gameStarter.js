var GameStarterComponent = {
    template:
    `
    <div style="
        height: 50px;
    ">
        <button @click="startGame"> Game Start! </button>
    </div>
    `,
    // data() {
    //     return {
    //         playerName: '',
    //         _correct: 0,
    //         _wrong: 0,
    //         _status: 'active',
    //     }
    // },
    computed: {
    },

    methods: {
        startGame() {
        },
        // setWrong() {
        //     this.$store.commit('wrong', { index: this.index });
        // },
    },

    created() {
    },
}