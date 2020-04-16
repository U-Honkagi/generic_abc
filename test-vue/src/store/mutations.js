export const correct = (state, { index }) => {
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
}
export const wrong = (state, { index }) => {
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
}
export const editText = (state, { index, name }) => {
    state.players[index].name = name;
}
export const resetPlayerPoints = (state) => {
    for (let i = 0; i < state.players.length; i++) {
        state.players[i].correct = (i === 0) ? 3 :
                                    (0 < i && i <= 2) ? 2 :
                                    (2 < i && i <= 5) ? 1 : 0;
        state.players[i].wrong  = 0;
        state.players[i].status = 'active';
    }
    state.undoStacks.length = 0;
    state.lastCorrectIndex = -1;
}
export const pushRedoStack = (state, { index, act }) => {
    state.redoStacks.push({ index: index, act: act });
}
export const clearRedoStack = (state) => {
    state.redoStacks.length = 0;
}