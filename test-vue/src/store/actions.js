export const undo = ({ commit, state }) => {
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
}

export const redo = ({ commit, state }) => {
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
}

export const correct = ({ commit }, { index }) => {
    commit('correct', { index: index });
    commit('clearRedoStack');
}

export const wrong = ({ commit }, { index }) => {
    commit('wrong', { index: index });
    commit('clearRedoStack');
}
