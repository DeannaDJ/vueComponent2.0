import {
    props
} from './config.js'

export default {
    name: 'loading',
    props: props,

    computed: {
        showLoading() {
            return this.show
        }
    }
}
