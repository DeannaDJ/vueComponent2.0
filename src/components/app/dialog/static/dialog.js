import {
    props
} from './config.js'

export default {
    name: 'dialog',
    props: props,

    data() {
        return {

        }
    },

    computed: {
        showDialog() {
            return this.show;
        },

        display() {
            return this.show;
        }
    },

    methods: {
        _onClick(item) {
            if (item.eventName) {
                this.$store.dispatch(item.eventName, item);
            }
        }
    }
}
