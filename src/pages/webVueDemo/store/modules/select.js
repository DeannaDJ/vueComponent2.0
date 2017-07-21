// initial state
// shape: [{ id, quantity }]
const state = {
    currentKey: 'gyzhixiao',
    currentValue: '呼呼呼',
    multiCurrentKey1: '',
    multiCurrentValue1: '',
    multiSelectItems1: [],
    multiCurrentKey: 'sanke',
    multiCurrentValue: '线下客人',
    multiSelectItems: ['sanke']
}

const getters = {
    currentKey: state => state.currentKey,
    currentValue: state => state.currentValue,
    multiCurrentKey1: state => state.multiCurrentKey1,
    multiCurrentValue1: state => state.multiCurrentValue1,
    multiSelectItems1: state => state.multiSelectItems1,
    multiCurrentKey: state => state.multiCurrentKey,
    multiCurrentValue: state => state.multiCurrentValue,
    multiSelectItems: state => state.multiSelectItems
}

const actions = {
    onSelectItemOne ({ commit }, data) {
        commit('SHOWSELECT_ONE', data);
    },

    onSelectItemTwo ({ commit }, data) {
        commit('SHOWSELECT_TWO', data);
    },

    onSelectItemThrid ({ commit }, data) {
        commit('SHOWSELECT_THRID', data);
    }
}


// mutations
const mutations = {
    SHOWSELECT_ONE(state, data) {
        state.currentKey = data.key;
        state.currentValue = data.value;
    },
    SHOWSELECT_TWO(state, data) {
        state.multiCurrentKey = data.key;
        state.multiCurrentValue = data.value;
        state.multiSelectItems = data.selectItems;
    },
    SHOWSELECT_THRID(state, data) {
        state.multiCurrentKey1 = data.key;
        state.multiCurrentValue1 = data.value;
        state.multiSelectItems1 = data.selectItems;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
