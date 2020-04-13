const store = new Vuex.Store({
    state: {
        players: [
            //              プレイヤー名            o         x           状態
            { id: 0, name: 'プレイヤー01', correct: 3, wrong: 0, status: 'active' },
            { id: 1, name: 'プレイヤー02', correct: 2, wrong: 0, status: 'active' },
            { id: 2, name: 'プレイヤー03', correct: 2, wrong: 0, status: 'active' },
            { id: 3, name: 'プレイヤー04', correct: 1, wrong: 0, status: 'active' },
            { id: 4, name: 'プレイヤー05', correct: 1, wrong: 0, status: 'active' },
            { id: 5, name: 'プレイヤー06', correct: 1, wrong: 0, status: 'active' },
            { id: 6, name: 'プレイヤー07', correct: 0, wrong: 0, status: 'active' },
            { id: 7, name: 'プレイヤー08', correct: 0, wrong: 0, status: 'active' },
            { id: 8, name: 'プレイヤー09', correct: 0, wrong: 0, status: 'active' },
            { id: 9, name: 'プレイヤー10', correct: 0, wrong: 0, status: 'active' },
            { id:10, name: 'プレイヤー11', correct: 0, wrong: 0, status: 'active' },
            { id:11, name: 'プレイヤー12', correct: 0, wrong: 0, status: 'active' },
        ],
        undoStacks: [],
        redoStacks: [],
        lastCorrectIndex: -1,
    },
    getters: {
        getPlayerDataById: state => id => {
            return state.players.find(players => players.id === id);
        },
        getPlayerNames: state => {
            let names = [];
            for (const player of state.players) {
                names.push(player.name);
            }
            return names;
        },
    },
    mutations: {
        correct(state, { index }) {
            if (state.players[index].correct >= 5) {
                return;
            }

            state.players[index].correct++;
            if (index === state.lastCorrectIndex) { // 連答
                state.players[index].correct++;
            }
            state.lastCorrectIndex = index;
            state.undoStacks.push({ index: index, act: 'o' });
            if (state.players[index].correct >= 5) {
                state.players[index].correct = 5;
                state.players[index].status = 'win';
            }
        },
        wrong(state, { index }) {
            if (state.players[index].wrong >= 2) {
                return;
            }

            state.players[index].wrong++;
            if (index === state.lastCorrectIndex) {
                state.lastCorrectIndex = -1;
            }
            state.undoStacks.push({ index: index, act: 'x' });
            if (state.players[index].wrong >= 2) {
                state.players[index].wrong = 2;
                state.players[index].status = 'lose';
            }
        },
        editText(state, { index, name }) {
            state.players[index].name = name;
        },
        resetPlayerPoints(state) {
            for (let i = 0; i < state.players.length; i++) {
                state.players[i].correct = (i === 0) ? 3 :
                                           (0 < i && i <= 2) ? 2 :
                                           (2 < i && i <= 5) ? 1 : 0;
                state.players[i].wrong  = 0;
                state.players[i].status = 'active';
            }
            state.undoStacks.length = 0;
            state.lastCorrectIndex = -1;
        },
        pushRedoStack(state, { index, act }) {
            state.redoStacks.push({ index: index, act: act });
        },
        clearRedoStack(state) {
            state.redoStacks.length = 0;
        },
    },
    actions: {
        undo({ commit, state }) {
            if (state.undoStacks.length <= 0) {
                console.log('invalid undo');
                return;
            }
            const localUndoStack = state.undoStacks.slice();
            commit('resetPlayerPoints');
            const lastAct = localUndoStack.pop();
            commit('pushRedoStack', { index: lastAct.index, act: lastAct.act });
            for (let i = 0; i < localUndoStack.length; i++) {
                switch(localUndoStack[i].act) {
                case 'o':
                    console.log('o');
                    commit('correct', { index: localUndoStack[i].index });
                    break;
                case 'x':
                    console.log('x');
                    commit('wrong', { index: localUndoStack[i].index });
                    break;
                default:
                    break;
                }
            }
        },
        redo({ commit, state }) {
            if (state.redoStacks.length <= 0) {
                console.log('invalid redo');
                return;
            }
            const localRedoStack = state.redoStacks.pop();  // いいのかこれ？
            switch(localRedoStack.act) {
            case 'o':
                console.log('o');
                commit('correct', { index: localRedoStack.index });
                break;
            case 'x':
                console.log('x');
                commit('wrong', { index: localRedoStack.index });
                break;
            default:
                break;
            }
        },
        correct({ commit }, { index }) {
            commit('correct', { index: index });
            commit('clearRedoStack');
        },
        wrong({ commit }, { index }) {
            commit('wrong', { index: index });
            commit('clearRedoStack');
        },
    },
})