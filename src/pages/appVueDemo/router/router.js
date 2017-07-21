/**
 * Created by linhaifeng on 2016/10/28.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Toast from '../model/toastDemo.vue'
import Action from '../model/actionDemo.vue'
import Select from '../model/selectDemo.vue'
import Dialog from '../model/dialogDemo.vue'
import Canlendar from '../model/canlendarDemo.vue'
import Datepicker from '../model/datepickerDemo.vue'

Vue.use(VueRouter);

const routes = [{
        path: '/toast',
        name: 'toast',
        component: Toast
    }, {
        path: '/action',
        name: 'action',
        component: Action
    }, {
        path: '/select',
        name: 'select',
        component: Select
    }, {
        path: '/dialog',
        name: 'dialog',
        component: Dialog
    }, {
        path: '/canlendar',
        name: 'canlendar',
        component: Canlendar
    }, {
        path: '/datepicker',
        name: 'datepicker',
        component: Datepicker
    }
];



const router = new VueRouter({
    // mode:'history', //这样url就没有/#/XXX,而是常见的url形式
    routes, // short for routes: routes
    linkActiveClass: 'active', //router-link的选中状态的class，也有一个默认的值
    history: true
});


export default router
