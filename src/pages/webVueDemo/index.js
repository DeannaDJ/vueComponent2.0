import Vue from 'vue'

import Web from './web.vue'
import router from './router/router';
import store from './store/store';

import 'css/common/web/base'
import 'css/lib/web/bootstrap/bootstrap'
import 'css/webVueDemo/index'

window.log = console.log;

let data = {
    el: '#web',
    router,
    store,
    render: h => h(Web)
}

const app = new Vue(data);
