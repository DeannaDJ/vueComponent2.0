// initial state
// shape: [{ id, quantity }]
const state = {
    startDate: '2016-11-24',
    endDate: '2016-11-25',
    showCanlendar: false
}

const getters = {
    endDate: state => state.endDate,
    startDate: state => state.startDate,
    showCanlendar: state => state.showCanlendar
}

const actions = {
    onShowCanlendar ({ commit }) {
        commit('SHOWCANLENDAR');
    },

    onSelectCanlendar ({ commit }, item) {
        commit('SHOWSELECTCANLENDAR', item);
    },

    onHideCanlendar({ commit }) {
        commit('HIDECANLENDAR');
    }
}


// mutations
const mutations = {
    HIDECANLENDAR() {
        state.showCanlendar = false;
    },
    SHOWCANLENDAR(state) {
        state.showCanlendar = true;
    },
    SHOWSELECTCANLENDAR(state, item) {
        state.startDate = item.startDate;
        state.endDate = item.endDate;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
