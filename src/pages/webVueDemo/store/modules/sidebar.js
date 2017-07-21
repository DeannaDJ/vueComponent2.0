// initial state
// shape: [{ id, quantity }]
const state = {
    oneKey: 'two',
    twoKey: 'two_one',
    thridKey: 'two'
}

const getters = {
    oneKey: state => state.oneKey,
    twoKey: state => state.twoKey,
    thridKey: state => state.thridKey
}

const actions = {
    onSlectItemOne ({ commit }, data) {
        commit('SELECTITEM_ONE', data);
    },

    onSlectItemTwo ({ commit }, data) {
        commit('SELECTITEM_TWO', data);
    },

    onSlectItemThrid ({ commit }, data) {
        commit('SELECTITEM_THRID', data);
    }
}


// mutations
const mutations = {
    SELECTITEM_ONE(state, data) {
        console.log(data);
    },

    SELECTITEM_TWO(state, data) {
        console.log(data);
    },

    SELECTITEM_THRID(state, data) {
        console.log(data);
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
