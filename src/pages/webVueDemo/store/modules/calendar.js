// initial state
// shape: [{ id, quantity }]
const state = {
    ciDate: '2017-06-01',
    coDate: '2017-06-03',
    minCoDate: getDisDate('2017-06-01', 1),
    maxCoDate: getDisDate('2017-06-01', 364)
}

const getters = {
    ciDate: state => state.ciDate,
    coDate: state => state.coDate,
    minCoDate: state => state.minCoDate,
    maxCoDate: state => state.maxCoDate
}

function getDisDate(date, day) {
    var nextDate = new Date(new Date(date).getTime() + day * 24 * 60 * 60 * 1000);
    return nextDate.getFullYear() + '-' +
        toTwoNumber(nextDate.getMonth() + 1) + '-' +
        toTwoNumber(nextDate.getDate());
}

/**
 * 转换成双数
 */
 function toTwoNumber(num) {
    num = parseInt(num, 10);
    if (num < 10) {
        return '0' + num;
    } else {
        return num;
    }
}

const actions = {
    onSelectCiDate ({ commit }, value) {
        commit('SELECTCIDATE', value);
    },

    onSelectCoDate ({ commit }, value) {
        commit('SELECTCODATE', value);
    }
}

// mutations
const mutations = {
    SELECTCIDATE(state, value) {
        state.ciDate = value;
        state.minCoDate = getDisDate(value, 1);
        state.maxCoDate = getDisDate(value, 364);

        if(new Date(state.minCoDate).getTime() > new Date(state.coDate).getTime()) {
            state.coDate = state.minCoDate;
        }

        if(new Date(state.maxCoDate).getTime() < new Date(state.coDate).getTime()){
            state.coDate = state.maxCoDate;
        }
    },
    SELECTCODATE(state, value) {
        state.coDate = value;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
