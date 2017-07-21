import {
    props
} from './config.js';

export default {
    name: 'toast',

    props: props,

    data() {
        return {
            display: false,
            showName: ''
        }
    },

    computed: {
        pt() {
            return this.position;
        }
    },

    watch: {
        show(val) {
            var vm = this;

            // toast显示中，放弃显示
            if(vm.display && val) {
                return;
            }

            if (!val) {
                vm.pt = '';
                vm.showName = '';
                return;
            }

            vm.display = true;

            setTimeout(function() {
                vm.showName = 'show';
                // 提示消失
                setTimeout(() => {
                    vm.$store.dispatch(vm.hideEventName);
                }, +vm.duration);

                setTimeout(() => {
                    vm.display = false;
                }, +vm.duration + 1000);
            }, 300);
        }
    }
}
