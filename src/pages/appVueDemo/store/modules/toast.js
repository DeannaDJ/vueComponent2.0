// initial state
// shape: [{ id, quantity }]
const state = {
    showToast: false,
    showToast1: false,
    showToast2: false
}

const getters = {
    showToast: state => state.showToast,
    showToast1: state => state.showToast1,
    showToast2: state => state.showToast2
}

const actions = {
    onShowToast ({ commit }) {
        commit('SHOWTOAST');
    },

    onShowToast1 ({ commit }) {
        commit('SHOWTOAST_ONE');
    },

    onShowToast2 ({ commit }) {
        commit('SHOWTOAST_TWO');
    },

    onHideToast({ commit }) {
        commit('HIDETOAST');
    }
}


// mutations
const mutations = {
    HIDETOAST() {
        state.showToast = false;
        state.showToast1 = false;
        state.showToast2 = false;
    },
    SHOWTOAST(state) {
        if(state.showToast) {
            state.showToast = false;
            return;
        }
        state.showToast = true;
    },
    SHOWTOAST_ONE(state) {
        if(state.showToast1) {
            state.showToast1 = false;
            return;
        }
        state.showToast1 = true;
    },
    SHOWTOAST_TWO(state) {
        if(state.showToast2) {
            state.showToast2 = false;
            return;
        }
        state.showToast2 = true;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
