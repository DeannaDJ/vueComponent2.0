// initial state
// shape: [{ id, quantity }]
const state = {
    showLoading: false,
    showLoadingTwo: false
}

const getters = {
    showLoading: state => state.showLoading,
    showLoadingTwo: state => state.showLoadingTwo
}

const actions = {
    onShowLoading({ commit }) {
        var _this = this;
        commit('SHOWLOADING');

        setTimeout(()=>{
            commit('HIDELOADING');
        },2000);
    },
    onShowLoadingTwo ({ commit }) {
        commit('SHOWLOADING_TWO');

        setTimeout(()=>{
            commit('HIDELOADING');
        },2000);
    },
    onHideLoading ({ commit }) {
        commit('HIDELOADING');
    }
}

// mutations
const mutations = {
    SHOWLOADING(state) {
        state.showLoading = true;
    },

    SHOWLOADING_TWO(state) {
        state.showLoadingTwo = true;
    },

    HIDELOADING(state) {
        state.showLoading = false;
        state.showLoadingTwo = false;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
