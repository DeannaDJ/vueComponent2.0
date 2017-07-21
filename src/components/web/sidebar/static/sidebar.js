import {
    props
} from './config.js'

export default {
    name: 'sidebar',
    props: props,

    data() {
        return {
            curKey: '',
            currentParentKey: ''
        }
    },

    created() {
        this.curKey = this.currentKey;
        for (let item of this.configs) {
            if (!item.subItem) return;
            for (let el of item.subItem) {
                if (this.curKey == el.subKey) {
                    this.currentParentKey = el.parentKey;
                    return;
                }
            }
        }
    },

    methods: {
        _onClickPrent(item) {
            this.currentParentKey = item.key;

            var subItem = item.subItem ? item.subItem[0] : null;
            this.curKey = subItem ? subItem.subKey : '';

            if (item.url) {
                window.location.href = item.url;
                return;
            }

            // 公共选择方法
            if (this.eventName) {
                this.$store.dispatch(this.eventName, subItem || item);
            }
        },

        _onClickChild(el) {
            this.curKey = el.subKey;
            this.currentParentKey = el.parentKey;

            if (el.url) {
                window.location.href = el.url;
                return;
            }

            // 公共选择方法
            if (this.eventName) {
                this.$store.dispatch(this.eventName, el);
            }
        }

    },

    filters: {
        exceedMax(val) {
            return val > 99 ? '99+' : val;
        }
    }
}
