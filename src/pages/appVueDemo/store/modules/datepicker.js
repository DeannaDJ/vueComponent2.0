// initial state
// shape: [{ id, quantity }]
const state = {
    date: '2016-11-20',
    limitDate: '2016-11-29',
    dateTime: '2016-11-29 07:00',
    defaultDate: '',
    showDate: false,
    showDateTime: false,
    showLimitDate: false,
    showDefaultDate: false
}

const getters = {
    date: state => state.date,
    dateTime: state => state.dateTime,
    limitDate: state => state.limitDate,
    defaultDate: state => state.defaultDate,
    showDate: state => state.showDate,
    showDateTime: state => state.showDateTime,
    showLimitDate: state => state.showLimitDate,
    showDefaultDate: state => state.showDefaultDate
}

const actions = {
    onHideSelect({ commit }) {
        commit('HIDEDATE');
    },
    onShowDate ({ commit }) {
        commit('SHOWDATE');
    },

    onShowDateTime ({ commit }) {
        commit('SHOWDATETIME');
    },

    onShowLimitDate ({ commit }) {
        commit('SHOWLIMITDATE');
    },

    onShowDefaultDate({ commit }) {
        commit('SHOWDEFAULTDATE');
    },

    onSelectDate({ commit }, date) {
        commit('SELECTDATE', date);
    },

    onSelectDateTime({ commit }, datetime) {
        commit('SELECTDATETIME', datetime);
    },

    onSelectLimitDate({ commit }, limitDate) {
        commit('SELECTLIMITDATE', limitDate);
    },

    onSelectDefualtDate({ commit }, defaultDate) {
        commit('SELECTDEFUALTDATE', defaultDate);
    }
}


// mutations
const mutations = {
    HIDEDATE(state) {
        state.showDate = false;
        state.showDateTime = false;
        state.showLimitDate = false;
        state.showDefaultDate = false;
    },
    SHOWDATE(state) {
        state.showDate = true;
    },
    SHOWDATETIME(state) {
        state.showDateTime = true;
    },
    SHOWLIMITDATE(state) {
        state.showLimitDate = true;
    },
    SHOWDEFAULTDATE(state) {
        state.showDefaultDate = true;
    },
    SELECTDATE(state, date) {
        state.date = date;
    },
    SELECTDATETIME(state, dateTime) {
        state.dateTime = dateTime;
    },
    SELECTLIMITDATE(state, limitDate) {
        state.limitDate = limitDate;
    },
    SELECTDEFUALTDATE(state, defaultDate) {
        state.defaultDate = defaultDate;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
