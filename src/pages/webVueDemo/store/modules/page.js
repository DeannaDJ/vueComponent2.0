// initial state
// shape: [{ id, quantity }]
const state = {

}

const getters = {

}

const actions = {
    onJumpPage({ commit }, item) {
        commit('JUMPPAGE', item);
    }
}


// mutations
const mutations = {
    JUMPPAGE(state, item) {
        console.log(item);
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
