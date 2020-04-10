const CommandButtonComponent = {
    template:
    `
    <div style="
        height: 50px;
    ">
        <button @click="undo"> Undo </button>
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
        undo() {
            this.$store.dispatch('undo');
        },
    },

    created() {
    },
}