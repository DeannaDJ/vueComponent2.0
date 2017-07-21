// initial state
// shape: [{ id, quantity }]
const state = {
    suggestValue: '',
    suggestTwoValue: ''
}

const getters = {
    suggestValue: state => state.suggestValue,
    suggestTwoValue: state => state.suggestTwoValue
}

const actions = {
    onSelectSuggestOne({ commit }, item) {
        commit('SELECTSUGGEST_ONE', item);
    },
    onSelectSuggestTwo ({ commit }, item) {
        commit('SELECTSUGGEST_TWO', item);
    }
}


// mutations
const mutations = {
    SELECTSUGGEST_ONE(state, item) {
        state.suggestValue = item.name;
        console.log(item);
    },
    SELECTSUGGEST_TWO(state, item) {
        state.suggestTwoValue = item.name;
        console.log(item);
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
