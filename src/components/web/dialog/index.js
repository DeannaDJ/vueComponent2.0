import Vue from 'vue'

import drag from './static/drag'
import {
    data,
    tpl
} from './static/config'

import './static/style';

// 全局变量
const ZINDEX = 9999;
var dialog;
var dragModule;

export default function(param) {
    var id = param.id;

    // dialog配置
    var config = {
        el: '#' + id,
        data: data,

        created() {
            cloneData(this);
        },

        mounted() {
            if (param.onshow &&
                (typeof param.onshow === 'function')) {
                param.onshow();
            }

            dragModule = null;
            !!param.data.drag && (dragModule = drag(this.$el));

            this.$el.onselectstart = () => {
                return false;
            };
        },

        methods: {
            _onClose() {
                this._onCloseDialog();
            },

            _onClick(item) {
                var isStop;
                if (item.eventCallback &&
                    (typeof item.eventCallback === 'function')) {
                    isStop = item.eventCallback();
                }

                // 未阻止关闭上弹窗
                if (isStop === undefined)
                    this._onClose();
            },

            // 事件绑定
            _onMousedown(e) {
                if (!param.data.drag) {
                    return;
                }
                var e = e || event;
                dragModule.mouseDown(e);
            },

            // 事件绑定
            _onMouseup() {
                if (!param.data.drag) {
                    return;
                }
                var e = e || event;
                dragModule.mouseStop(e);
            },

            // 隐藏弹窗
            _onCloseDialog() {
                this.$el.remove();
                this.$destroy();
                document.getElementById(id + '-fade').remove();
                dialog = null;
            }
        }
    }

    // 创建节点
    var createElement = (id)=> {
        var curDialog = document.getElementById(id),
            newNode = document.createElement('div'),
            newFade = document.createElement('div'),
            webDialog = document.getElementsByClassName('web-dialog'),
            index = (webDialog ? webDialog.length : 0);

        if (curDialog) {
            curDialog.remove();
        }

        newNode.id = id;
        newFade.id = id + '-fade';
        newNode.className = 'web-dialog ' + id + '-' + index;
        newFade.className = 'dg-fade';

        if (!webDialog || !index) {
            newNode.style.zIndex = ZINDEX;
            newFade.style.zIndex = ZINDEX - 1;
            newNode.innerHTML = tpl;
            document.body.appendChild(newNode);
            document.body.appendChild(newFade);
            return;
        }

        newNode.style.zIndex = ZINDEX + index * 2;
        newFade.style.zIndex = newNode.style.zIndex - 1;
        newNode.innerHTML = tpl;
        document.body.appendChild(newNode);
        document.body.appendChild(newFade);
    }

    // clone data
    var cloneData = (vm) => {
        var data = param.data || {};
        vm.$data.title = data.title || '';
        vm.$data.content = data.content || '';
        vm.$data.skin = data.skin || '';
        vm.$data.drag = !!data.drag;
        vm.$data.dragClass = data.drag ? 'drag' : '';
        vm.$data.contentStyle = data.contentStyle || {
            width: "",
            height: "",
            padding: "20px"
        };
        vm.$data.position = {
            top: null,
            left: null
        };
        vm.$data.buttons = data.buttons || [{
            name: '关闭',
            eventName: ''
        }, {
            name: '确认',
            eventName: ''
        }];
    }

    // 创建节点
    createElement(id);

    // 创建独立vue页面
    dialog = new Vue(config);

    // 返回组件
    return dialog;
};
