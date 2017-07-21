import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
import index from './modules/index'
import page from './modules/page'
import sidebar from './modules/sidebar'
import select from './modules/select'
import suggest from './modules/suggest'
import loading from './modules/loading'
import calendar from './modules/calendar'

Vue.use(Vuex)

export default new Vuex.Store({
    // actions,
    // getters,
    modules: {
        index,
        page,
        sidebar,
        select,
        suggest,
        loading,
        calendar
    },
    strict: process.env.NODE_ENV !== 'production', //是否开启严格模式
})
