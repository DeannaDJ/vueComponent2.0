import {
    props
} from './config.js'

export default {
    name: 'suggest',
    props: props,

    data() {
        return {
            value: '',
            currentIndex: 0,
            suggestList: []
        }
    },

    created() {
        this.value = this.queryValue;
    },

    watch: {
        value(val) {
            this.onValidateValue(val);
        }
    },

    methods: {
        _onFocus() {
            this.onValidateValue();
        },

        _onClear(e) {
            var vm = this;

            setTimeout(() => {
                vm.currentIndex = 0;
                vm.suggestList = [];
            }, 100);
        },

        _onKeydown(e) {
            var event = e || window.event,
                index = +this.currentIndex,
                maxLen = this.suggestList.length - 1;

            if (event.keyCode == 38) { // 上键
                this.currentIndex = index > 0 ? --index : maxLen;
            } else if (event.keyCode == 40) { // 下键
                this.currentIndex = index < maxLen ? ++index : 0;
            } else if (event.keyCode == 13) { // 回车键
                this._onSelect(this.suggestList[this.currentIndex]);
            }
        },

        _onSelect(item) {
            var value = item;
            if (this.suggestKey && item[this.suggestKey]) {
                value = item[this.suggestKey];
            }

            var vm = this;
            setTimeout(() => {
                vm.value = value;
            }, 0);
            setTimeout(() => {
                vm.currentIndex = 0;
                vm.suggestList = [];
            }, 10);

            this.eventName &&
                this.$store.dispatch(this.eventName, item);
        },

        // 验证value
        onValidateValue(val) {
            let temp = [],
                value = '';

            this.currentIndex = 0;
            val = val || this.value;

            if (!val) {
                this.suggestList = [];
                return;
            }

            for (let item of this.list) {
                value = item;
                if (this.suggestKey && item[this.suggestKey]) {
                    value = item[this.suggestKey];
                }
                if (value.indexOf(val) != -1) {
                    temp.length < this.limit && temp.push(item);
                }
            }
            this.suggestList = temp;
        },

        // 关键字突出显示
        filterDisplay(item) {
            var val = item;
            if (this.suggestKey && item[this.suggestKey]) {
                val = item[this.suggestKey];
            }

            if (this.value) {
                var diff = val.split(this.value);
                val = diff.join('<span class="color-danger">' + this.value + '</span>');
            }

            return val;
        }
    }
}
