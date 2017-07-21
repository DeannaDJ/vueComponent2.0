import {
    props
} from './config.js'

export default {
    name: 'select',

    props: props,

    data() {
        return {
            display: false,

            // 选择结果变量
            top: 0,
            minTop: 88,
            maxTop: 88,
            touchendy: 0,
            touchstarty: 0,
            currentIndex: 0,
            selectList: [],

            // 分组变量
            grouptop: 0,
            groupmaxTop: 88,
            grouptouchendy: 0,
            grouptouchstarty: 0,
            groupcurrentkey: '',
            groupcurrentIndex: 0,
            groupList: {}
        }
    },

    created() {
        this.minTop = 88;
        this.vSelectInit();
        this.vSelectValue();
    },

    watch: {
        showSelect(val) {
            var vm = this;
            if (vm.display == val) {
                return;
            }

            vm.display = val;
            if (val) {
                vm.vSelectInit();
                vm.vSelectValue();
            }
        }
    },

    computed: {
        showSelect() {
            return this.show;
        }
    },

    methods: {

        // 关闭选择器方法
        _onClose() {
            this.vSelectHide();
        },

        // 确定方法
        _onSure() {
            var item = this.selectList[this.currentIndex];

            // 回调选择事件
            if (this.eventsName) {
                this.$store.dispatch(this.eventsName, item);
            }
            this.vSelectHide();
        },

        // 选择值方法
        _onSelect(idx) {
            this.currentIndex = idx;
            this.top = -44 * idx + 88;
        },

        // touchstart方法
        _onTouchstart(e) {
            this.touchstarty = e.touches[0].pageY;
        },

        // touchmove方法
        _onTouchmove(e) {
            var vm = this;

            vm.touchendy = e.touches[0].pageY;
            var diff = vm.touchendy - vm.touchstarty;

            var t = Math.round((vm.top + diff) / 44);
            var top = t * 44;

            if (top > this.minTop) {
                top = this.minTop;
            } else if (top < this.maxTop) {
                top = this.maxTop;
            }

            setTimeout(function() {
                vm.top = top;
                vm.currentIndex = Math.round((top - 88) / -44);
            }, 100);
        },


        // group touchstart方法
        _onGroupTouchstart(e) {
            this.grouptouchstarty = e.touches[0].pageY;
        },

        // group touchmove方法
        _onGroupTouchmove(e) {
            var vm = this;

            vm.grouptouchendy = e.touches[0].pageY;
            var diff = vm.grouptouchendy - vm.grouptouchstarty;

            var t = Math.round((vm.grouptop + diff) / 44);
            var top = t * 44;

            if (top > this.minTop) {
                top = this.minTop;
            } else if (top < this.groupmaxTop) {
                top = this.groupmaxTop;
            }

            setTimeout(function() {
                vm.grouptop = top;
                vm.groupcurrentIndex = Math.round((top - 88) / -44);

                vm.getGroupcurrentKey();
            }, 100);
        },

        // group touchend方法
        _onGroupTouchend(e) {
            var vm = this;
            setTimeout(function() {
                vm.selectList = vm.groupList[vm.groupcurrentkey];
                vm.maxTop = -44 * (vm.selectList.length - 1) + 88;
                vm._onSelect(0);
            }, 100);
        },

        // group选择方法
        _onSelectGroup(key) {
            if (this.groupcurrentkey == key) return;

            this.groupcurrentkey = key;
            // 获取索引index
            this.getGroupcurrentIndex();
            this.selectList = this.groupList[key];
            this._onSelect(0);
        },

        // 获取当前分组值
        getGroupcurrentKey() {
            var index = -1;
            for (let key in this.groupList) {
                index++;
                if (index == this.groupcurrentIndex) {
                    this.groupcurrentkey = key;
                    return;
                }
            }
        },

        // 获取当前分组索引
        getGroupcurrentIndex() {
            var index = -1;
            for (let key in this.groupList) {
                index++;
                if (key == this.groupcurrentkey) {
                    this.groupcurrentIndex = index;
                    this.grouptop = -44 * this.groupcurrentIndex + 88;
                    return;
                }
            }
        },

        // 初始选择器事件
        vSelectInit() {
            var count = -1;
            this.groupList = {};
            this.selectList = [];

            if (this.group == 2 && this.groupName) {
                for (var i in this.list) {
                    var item = this.list[i];

                    var gk = item[this.groupName];
                    if (gk && !this.groupList[gk]) {
                        count++;
                        this.groupList[gk] = [];
                    }

                    if (item[this.displayKey] == this.currentKey) {
                        this.groupcurrentkey = gk;
                        this.groupcurrentIndex = count;
                        this.currentIndex = this.groupList[gk].length - 1;
                    }

                    this.groupList[gk].push(item);
                }

                if (this.groupcurrentkey) {
                    this.selectList = this.groupList[this.groupcurrentkey];
                } else {
                    this.selectList = this.groupList[this.list[0][this.groupName]];
                }

                this.groupmaxTop = -44 * count + 88;
                this.maxTop = -44 * (this.selectList.length - 1) + 88;
            } else {
                this.selectList = [].concat(this.list);
                this.maxTop = -44 * (this.selectList.length - 1) + 88;
            }
        },

        // 选择结果事件
        vSelectValue(value) {
            var ls = this.selectList,
                len = ls.length,
                dn = this.displayName,
                val = value ? value : this.currentValue;

            // 确定选择索引
            this.currentIndex = 0;
            for (let i = 0; i < len; i++) {
                if (dn && ls[i][dn] == val) {
                    this.currentIndex = i;
                } else if (ls[i] == val) {
                    this.currentIndex = i;
                }
            }
            this.top = -44 * this.currentIndex + 88;
            this.grouptop = -44 * this.groupcurrentIndex + 88;
            this.show && this.vSelectShow();
        },

        // 展示事件
        vSelectShow() {
            var vm = this;
            vm.show = true;

            // 展示select
            vm.$nextTick(() => {
                vm.display = true;
            }, 1000);
        },

        // 隐藏事件
        vSelectHide() {
            var vm = this;

            // 隐藏select
            vm.$nextTick(() => {
                vm.$store.dispatch(this.hideEventName);
            }, 1000);
        }
    },

    filters: {
        // 过滤展示结果
        filterDisplay: function(item, displayName) {
            if (displayName && item[displayName])
                return item[displayName];
            return item;
        }
    }
}
