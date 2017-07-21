/**
 * Created by linhaifeng on 2016/10/28.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../model/indexDemo'
import Page from '../model/pageDemo'
import Dialog from '../model/dialogDemo'
import Sidebar from '../model/sidebarDemo'
import Select from '../model/selectDemo'
import Suggest from '../model/suggestDemo'
import Loading from '../model/loadingDemo'
import Calendar from '../model/calendarDemo'

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'index',
        component: Index
    }, {
        path: '/page',
        name: 'page',
        component: Page
    }, {
        path: '/dialog',
        name: 'dialog',
        component: Dialog
    }, {
        path: '/sidebar',
        name: 'sidebar',
        component: Sidebar
    },{
        path: '/select',
        name: 'select',
        component: Select
    }, {
        path: '/suggest',
        name: 'suggest',
        component: Suggest
    }, {
        path: '/loading',
        name: 'loading',
        component: Loading
    }, {
        path: '/calendar',
        name: 'calendar',
        component: Calendar
    }
];



const router = new VueRouter({
    // mode:'history', //这样url就没有/#/XXX,而是常见的url形式
    routes, // short for routes: routes
    linkActiveClass: 'active', //router-link的选中状态的class，也有一个默认的值
    history: true
});


export default router
