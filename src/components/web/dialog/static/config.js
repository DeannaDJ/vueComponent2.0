export let tpl = "<div id='v-dialog' class='v-dialog' :class='skin' onselectstart='return false'>" +
    "<div class='dialog'>" +
    "<div class='hd' :class='dragClass' @mousedown='_onMousedown($event)' @mouseup='_onMouseup($event)'>" +
    "<button class='i-close' @click='_onClose'>×</button>" +
    "<i class='i-start' v-if='title'></i>" +
    "<span class='hd-title' v-if='title' v-text='title'></span></div>" +
    "<div class='bd' :style='contentStyle' v-html='content'></div>" +
    "<div class='ft'>" +
    "<span v-for='item in buttons' v-show='item.name' @click='_onClick(item)'>{{item.name}}</span>" +
    "</div>" +
    "</div>" +
    "</div>";

export let data = {
    title: "",
    content: "",
    skin: "",
    drag: false,
    dragClass: "",
    width: "",
    height: "",
    position: {
        top: null,
        left: null
    },
    buttons: [{
        name: '关闭',
        eventCallback: null
    }, {
        name: '确认',
        eventCallback: null
    }],
    contentStyle: {
        width: "",
        height: "",
        padding: "20px"
    }
};
