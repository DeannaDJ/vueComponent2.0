// initial state
// shape: [{ id, quantity }]
const state = {
    actionShow: false,
    actionShow1: false,
    actionShow2: false
}

const getters = {
    actionShow: state => state.actionShow,
    actionShow1: state => state.actionShow1,
    actionShow2: state => state.actionShow2
}

const actions = {
    onShowAction ({ commit }) {
        commit('SHOWACTION');
    },

    onShowAction1 ({ commit }) {
        commit('SHOWACTION_ONE');
    },

    onShowAction2 ({ commit }) {
        commit('SHOWACTION_TWO');
    },

    actionEvent({ commit }, item) {
        console.log(item.name);
    },

    onHideAction({ commit }) {
        commit('HIDEACTION');
    }
}


// mutations
const mutations = {
    HIDEACTION() {
        state.actionShow = false;
        state.actionShow1 = false;
        state.actionShow2 = false;
    },
    SHOWACTION(state) {
        state.actionShow = true;
    },
    SHOWACTION_ONE(state) {
        state.actionShow1 = true;
    },
    SHOWACTION_TWO(state) {
        state.actionShow2 = true;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
