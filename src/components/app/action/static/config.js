export let props = {
    show: {
        type: Boolean,
        default: false
    },
    position: {
        type: String,
        default: 'bottom'
    },
    cancel: {
        type: Boolean,
        default: false
    },
    fullscreen: {
        type: Boolean,
        default: true
    },
    actionList: {
        type: Array,
        default: [{
            name: '取消',
            eventName: ''
        }]
    },
    hideEventName: {
        type: String,
        default: 'onHideAction'
    }
};
