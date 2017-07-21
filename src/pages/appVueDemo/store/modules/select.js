// initial state
// shape: [{ id, quantity }]
const state = {
    showList: false,
    showList1: false,
    showList2: false,
    currentValue: '途家',
    currentValue1: '呼呼呼',
    currentRoomNo: '9',
    currentRoomName: '小猪猪'
}

const getters = {
    showList: state => state.showList,
    showList1: state => state.showList1,
    showList2: state => state.showList2,
    currentValue: state => state.currentValue,
    currentValue1: state => state.currentValue1,
    currentRoomNo: state => state.currentRoomNo,
    currentRoomName: state => state.currentRoomName,
}

const actions = {
    onSelectlist ({ commit }) {
        commit('SHOWSELECT');
    },

    onSelectlist1 ({ commit }) {
        commit('SHOWSELECT_ONE');
    },

    onSelectlist2 ({ commit }) {
        commit('SHOWSELECT_TWO');
    },

    selectEvent({ commit }, item) {
        commit('SELECT_EVENT', item);
    },

    selectCallback({ commit }, item) {
        commit('SELECT_CALLBACK', item);
    },

    selectGroupCallback({ commit }, item) {
        commit('SELECT_GROUP_CALLBACK', item);
    },

    onHideSelect({ commit }) {
        commit('HIDESELECT');
    }
}


// mutations
const mutations = {
    HIDESELECT(state) {
        state.showList = false;
        state.showList1 = false;
        state.showList2 = false;
    },
    SHOWSELECT(state) {
        state.showList = true;
    },
    SHOWSELECT_ONE(state) {
        state.showList1 = true;
    },
    SHOWSELECT_TWO(state) {
        state.showList2 = true;
    },
    SELECT_EVENT(state, data) {
        console.log(data);
    },
    SELECT_CALLBACK(state, data) {
        console.log(data);
    },
    SELECT_GROUP_CALLBACK(state, data) {
        console.log(data);
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
