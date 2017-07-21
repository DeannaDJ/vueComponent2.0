import Vue from 'vue'

import App from './app.vue'
import router from './router/router';
import store from './store/store';

import 'css/common/base'
import 'css/appVueDemo/index'

window.log = console.log;

let data = {
    el: '#app',
    router,
    store,
    render: h => h(App)
}

const app = new Vue(data);
