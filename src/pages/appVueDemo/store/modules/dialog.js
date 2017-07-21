// initial state
// shape: [{ id, quantity }]
const state = {
    showDialog: false,
    showDialog1: false
}

const getters = {
    showDialog: state => state.showDialog,
    showDialog1: state => state.showDialog1
}

const actions = {
    onShowDialog ({ commit }) {
        commit('SHOWDIALOG');
    },

    onShowDialog1 ({ commit }) {
        commit('SHOWDIALOG_ONE');
    },

    onSure({ commit }, item) {
        commit('SURE', item);
    },

    onClose({ commit }, item) {
        commit('CLOSE', item);
    }
}


// mutations
const mutations = {
    SURE(state, data) {
        state.showDialog = false;
        state.showDialog1 = false;
        console.log(data);
    },
    CLOSE() {
        state.showDialog = false;
        state.showDialog1 = false;
    },
    SHOWDIALOG(state) {
        state.showDialog = true;
    },
    SHOWDIALOG_ONE(state) {
        state.showDialog1 = true;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
