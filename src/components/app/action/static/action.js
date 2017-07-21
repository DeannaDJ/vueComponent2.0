import {
    props
} from './config.js';

export default {
    name: 'action',

    props: props,

    data() {
        return {
            list: []
        }
    },

    created() {
        this.list = Object.assign([],this.actionList);

        if(this.cancel) {
            this.list.push({
                name: '取消',
                eventName: ''
            });
        }
    },

    computed: {
        showAction() {
            return this.show;
        },

        display() {
            return this.show;
        },

        isMiddle() {
            return this.position == 'center'
        }
    },

    methods: {
        _onAction(item) {
            this.$store.dispatch(this.hideEventName);

            if (item.eventName) {
                this.$store.dispatch(item.eventName, item);
            }
        },

        _onClose() {
            this.$store.dispatch(this.hideEventName);
        }
    }
}
