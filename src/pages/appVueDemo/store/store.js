import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
import toast from './modules/toast'
import action from './modules/action'
import select from './modules/select'
import dialog from './modules/dialog'
import canlendar from './modules/canlendar'
import datepicker from './modules/datepicker'

Vue.use(Vuex)

export default new Vuex.Store({
    // actions,
    // getters,
    modules: {
        toast,
        action,
        select,
        dialog,
        canlendar,
        datepicker
    },
    strict: process.env.NODE_ENV !== 'production', //是否开启严格模式
})
